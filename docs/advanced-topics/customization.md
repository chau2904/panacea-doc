---

title: Customization

sidebar_position: 17

---

# Customization

**Panacea Framework** is a flexible and versatile automation framework that can be customized to fit specific testing needs. Below are key areas where customization can be applied:

## Custom Libraries

Custom libraries allow you to extend Panacea Framework’s capabilities by creating your own keywords. This is especially useful when you need functionality that is not available in the standard libraries.

We will provide Panacea as a ready-to-use library. This library will be fully integrated, ensuring ease of implementation and use. It will come with comprehensive documentation and support, streamlining your workflow and enhancing productivity.

## Creating a Custom Library

### 1. Write a Python module:

Create a Python file and define your custom keywords as functions within this module.

![Platform Overview diagram](/img/pythonmodule.png)

In this example:

- **@library** decorator indicates that this class is a Panacea Framework library.

- **@keyword** decorator is used to mark methods as keywords. You can also provide a custom name for the keyword using @keyword('Custom Name').

#### Benefits of Using Annotations

- **Readability**: Decorators make it clear which methods are intended to be used as keywords.

- **Maintainability**: Allows you to change the keyword names without changing the method names.

- **Documentation**: Provides a place to document the purpose and usage of each keyword directly in the code.

### 2. Exposing the Custom Library via __init__.py

To make your custom keyword library available to test cases, import it inside the module’s __init__.py and include it in the main Panacea library class.

  **Example**: MobAppTestLibrary/__init__.py

![Platform Overview diagram](/img/mobtestlibrary.png)

This approach ensures:

- All custom keyword classes are centrally registered

- Test cases import only one Panacea library

- Keywords are automatically available without extra imports

### 3. Importing the Library in Your Test Case

Since the custom keyword class is already included in __init__.py, you only need to import the main library in your test file.

  **Example**: Using Custom Keywords in a Test Case

![Platform Overview diagram](/img/customkeyword.png)