define install_node_package
	echo "Installing $1 ..."
	cd $1 || exit
	npm install --link

endef

define _remove_file_if_exist
	if [ -f $1 ] ; then \
		echo "Remove $1"; \
		rm -f $1; \
	fi

endef

define _remove_directory_if_exist
	if [ -d $1 ] ; then \
		echo "Remove directory $1"; \
		rm -Rf $1; \
	fi

endef

define deepclean_node_package
	echo "Deep cleaning $1 ..."
	$(call _remove_file_if_exist,$1/package-lock.json)
	$(call _remove_directory_if_exist,$1/node_modules)

endef

define _clean_static
	echo "Clean static build" 
	$(call _remove_directory_if_exist,static)

endef

define _clean_pxt_steami
	echo "Clean pxt-steami build" 

	if [ -x "$(PXT)" ]; then
		echo "pxt found ! \n Automatic cleanning"
		if [ -d pxt-steami/built ]; then
			cd pxt-steami || exit
			pxt clean
		fi
	else
		echo "pxt not found ! \n Manual cleanning"
		$(call _remove_directory_if_exist,pxt-steami/built)
		$(call _remove_directory_if_exist,pxt-steami/libs/core/built)
		$(call _remove_directory_if_exist,pxt-steami/libs/blocksprj/built)
	fi

endef

define _clean_pxt_core
	echo "Clean pxt-core build" 
	$(call _remove_directory_if_exist,pxt/built)

endef

define _clean_pxt_common_packages
	echo "Clean pxt-common-packages build" 
	$(call _remove_directory_if_exist,pxt-common-packages/built)

endef

define _clean_pxt_steami_backend_certificates
	echo "Clean pxt-steami-backend certificates ..." 
	$(call _remove_file_if_exist,pxt-steami-backend/https/fastify.cert)
	$(call _remove_file_if_exist,pxt-steami-backend/https/fastify.key)
	$(call _remove_file_if_exist,pxt-steami-backend/https/rootCA.pem)

endef

define _clean
	$(call _clean_static)
	$(call _clean_pxt_steami)

endef

define _clean_all
	$(call _clean_static)
	$(call _clean_pxt_steami)
	$(call _clean_pxt_common_packages)
	$(call _clean_pxt_core)

endef

NODE_PACKAGES := pxt pxt-common-packages pxt-steami pxt-steami-backend .

define _deepclean_all_node_packages
	$(foreach package,$(NODE_PACKAGES),$(call deepclean_node_package,$(package)))

endef

define _deepclean
	$(call _clean_all)
	$(call _deepclean_all_node_packages)

endef

define _generate_localcertificates
	export CAROOT=$(PWD)/pxt-steami-backend/https
	mkcert -install 
	mkcert -cert-file pxt-steami-backend/https/fastify.cert -key-file pxt-steami-backend/https/fastify.key 'makecode.local' localhost 127.0.0.1 ::1

endef

define _install_cert_for_local_dev
	if [ -f /.dockerenv ]; then 
		echo "This rule work only for the host system"
	else
		sudo cp pxt-steami-backend/https/rootCA.pem /usr/local/share/ca-certificates/rootCA.crt
		sudo update-ca-certificates
		sudo sh -c "echo 127.0.0.1 makecode.local>>/etc/hosts"
	fi

endef