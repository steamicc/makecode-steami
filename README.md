# STeaMi MakeCode Editor [![buildtarget](https://github.com/steamicc/makecode-steami/actions/workflows/buildtarget.yml/badge.svg)](https://github.com/steamicc/makecode-steami/actions/workflows/buildtarget.yml)

Welcome to the STeaMi MakeCode Editor repository! This repository provides the MakeCode environment for the STeaMi educational development board, designed to facilitate learning programming and electronics in an engaging and interactive way.

## About STeaMi

[STeaMi](https://www.steami.cc/) is an educational board aimed at introducing students, educators, and enthusiasts to the basics of programming, electronics, and STEM concepts. The board is designed with simplicity and versatility in mind, providing a powerful platform for learning through hands-on experience.

<img src="https://github.com/steamicc/assets/blob/main/Steami.png?raw=true"/>

The STeaMi board is equipped with several features to help learners experiment, including:

-   Multiple programmable inputs and outputs.
-   Integration with common sensors and actuators.
-   Easy connectivity with other devices, including direct programming through MakeCode.

## MakeCode Editor for STeaMi

This repository hosts the MakeCode editor configuration and extensions for the STeaMi board. The editor provides a block-based coding environment ideal for beginners, with support for JavaScript for those who wish to take their skills further.

### Features

-   **Simulation Support**: Users can simulate their STeaMi programs directly in the browser, visualizing how their code will interact with the board's components.
-   **WebUSB Upload**: Directly upload code to the STeaMi board using WebUSB, making the programming workflow smoother and more efficient.
-   **Interactive Blocks and JavaScript**: Program using drag-and-drop blocks or switch to JavaScript to learn and practice text-based coding.

## Getting Started

To get started with the STeaMi MakeCode editor:

1. Clone or download this repository.
2. Open the MakeCode editor for STeaMi (<https://makecode.steami.cc>).
3. Start creating your first project using either blocks or JavaScript.
4. Use the **WebUSB Upload** feature to upload your project to your STeaMi board.

### Requirements

-   **WebUSB**: You need a browser that supports WebUSB (such as Chrome or Edge).
-   **STeaMi Board**: Ensure your board is connected via USB and powered on.

## Installing Locally

To run the MakeCode editor locally:

1. Install Node.js and npm if they are not already installed.
2. Clone this repository:
    ```bash
    git clone https://github.com/steamicc/makecode-steami
    ```
3. Navigate to the cloned directory:
    ```bash
    cd makecode-steami
    ```
4. Set up the environment by running the setup target:
    ```bash
    make setup
    ```
5. Build the project:
    ```bash
    make build
    ```
6. Start the local server:
    ```bash
    make serve
    ```
7. Open the editor in your browser at `http://localhost:3000`.

## PXT Commands and Default Parameters

This project uses a Makefile to handle various PXT commands such as `serve`, `run`, `update`, and more. Each command can be run by simply invoking `make <command>`. For instance:

```sh
make serve
```

By default, each PXT command comes with predefined arguments, which can be customized according to your needs. Below is a list of the default arguments for each command:

-   **add**: _(No default arguments)_
-   **buildcss**: _(No default arguments)_
-   **buildjres**: _(No default arguments)_
-   **buildsimjs**: _(No default arguments)_
-   **buildsprites**: _(No default arguments)_
-   **buildtarget**: --localbuild --force
-   **bump**: _(No default arguments)_
-   **checkdocs**: _(No default arguments)_
-   **checkpkgcfg**: _(No default arguments)_
-   **ci**: _(No default arguments)_
-   **console**: _(No default arguments)_
-   **deploy**: _(No default arguments)_
-   **extract**: _(No default arguments)_
-   **init**: _(No default arguments)_
-   **install**: _(No default arguments)_
-   **npminstallnative**: _(No default arguments)_
-   **run**: _(No default arguments)_
-   **serve**: --localbuild --rebundle --noauth --no-browser --no-serial -h '0.0.0.0'
-   **staticpkg**: -o ../static/ --localbuild
-   **tag**: _(No default arguments)_
-   **testghpkgs**: _(No default arguments)_
-   **update**: _(No default arguments)_
-   **usedblocks**: _(No default arguments)_

### Default Parameters Variable Naming Pattern

The naming of the variables containing the default parameters follows a consistent pattern. Each variable that holds default arguments is named as:

**`PXT_<COMMAND>_ARGS`**

Where:

-   **`PXT`**: This prefix indicates that the variable is related to PXT commands.
-   **`<COMMAND>`**: The name of the specific PXT command, written in uppercase. For example, `DEPLOY` for the `deploy` command.
-   **`_ARGS`**: This suffix denotes that the variable contains arguments to be passed to the specified command.

### Examples

-   **`PXT_DEPLOY_ARGS`**: Contains the default arguments for the `deploy` command.
-   **`PXT_RUN_ARGS`**: Contains the default arguments for the `run` command.
-   **`PXT_UPDATE_ARGS`**: Contains the default arguments for the `update` command.

### How to Modify Default Parameters

If you need to override the default arguments, you can do so by specifying them directly in the command line when invoking `make`. To modify the default parameters for any PXT command, you can override the variable directly when calling `make`. For instance:

```sh
make run PXT_RUN_ARGS="--hardware --verbose"
```

This command will run the `run` target with custom arguments (`--hardware --verbose`), overriding the default value set in `PXT_RUN_ARGS`.

This naming convention makes it easy to customize arguments for each command. This flexibility allows you to tailor the PXT commands to match your specific development or deployment requirements without modifying the Makefile itself.

### Example Usage

To run the `serve` command with custom arguments:

```sh
make serve PXT_SERVE_ARGS="--port 8080 --no-browser"
```

## Using Dev Container

This repository is configured to be used with a development container (Dev Container), which allows for an easy and consistent development environment.

### Setting Up with Dev Container

1. **Install Docker**: Ensure you have Docker installed on your system. You can download it from [Docker's official website](https://www.docker.com/get-started).
2. **Install VS Code**: You will also need Visual Studio Code, which you can get from [VS Code's official website](https://code.visualstudio.com/).
3. **Install Remote - Containers Extension**: In VS Code, install the **Remote - Containers** extension from the Extensions Marketplace.
4. **Open the Repository in Dev Container**:
    - Open the STeaMi MakeCode repository in VS Code.
    - You should see a prompt asking if you want to reopen the repository in a Dev Container. Click **Reopen in Container**.
    - VS Code will then build and open the development environment inside a container, setting up all necessary dependencies automatically.

Using a Dev Container ensures that all contributors have the same environment, minimizing issues related to different system configurations.

## Contributing

Contributions are welcome! If you want to contribute:

-   Fork this repository.
-   Create a new branch for your feature or bug fix.
-   Submit a pull request with a detailed description of your changes.

Please make sure to follow the coding guidelines and document your changes where necessary.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or support, feel free to open an issue or reach out via email at [contact@steami.cc](mailto:contact@steami.cc).

## Acknowledgments

The STeaMi project is inspired by educational initiatives like BBC micro:bit, aimed at making programming accessible and enjoyable for all learners.
