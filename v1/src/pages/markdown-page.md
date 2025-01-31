---
title: Markdown page example
---

# Percival the Dragon Slayer
[![Java CI with Maven](https://github.com/spaceghost69/Percival the Dragon Slayer/actions/workflows/maven.yml/badge.svg)](https://github.com/spaceghost69/Percival the Dragon Slayer/actions/workflows/maven.yml)

An AI-powered Java Business Process Management (BPM) platform built on top of [ThorAPI](https://github.com/spaceghost69/ThorAPI).

## Overview

Percival the Dragon Slayer is an innovative platform that leverages artificial intelligence to streamline and automate business processes. Built upon the robust capabilities of ThorAPI, it accelerates the development of secure and efficient APIs by transforming OpenAPI specifications into fully-functional backend and frontend codebases.

With Percival the Dragon Slayer, developers can rapidly generate Java Spring Boot services and TypeScript clients, significantly reducing development time while maintaining high standards of code quality and security.

## Features

- **Automated Liquibase Script Generation**: Effortlessly generate database migration scripts from your OpenAPI schemas, ensuring your database stays in sync with your application models.

- **Java Data Model Generation**: Create comprehensive Java data models annotated for Spring Boot and JPA, facilitating seamless integration with your backend services.

- **TypeScript Client Generation**: Produce fully-typed TypeScript object models and REST clients, empowering your frontend applications with reliable and consistent API interactions.

- **Spring Boot Service Generation**: Generate robust Spring Boot services complete with CRUD operations and JPA integration, accelerating your backend development.

- **Database Connectivity**: Easily connect to various relational databases via JPA, with support for multiple database platforms.

- **REST API Documentation**: Integrate with [SpringDoc OpenAPI](https://springdoc.org/) to automatically generate interactive API documentation.

Advanced features (marked with *):

- **Encrypted Fields via ThorAPI SecureField\***: Secure sensitive data with field-level encryption, protecting information both at rest and in transit.

- **Automatic Relationship Serialization\***: Seamlessly handle one-to-many and many-to-many relationships, simplifying data modeling and serialization.

- **Secure React/TypeScript Component Libraries\***: Generate secure, data-bound React components to build robust frontend interfaces with ease.

## Built on ThorAPI

[ThorAPI](https://github.com/spaceghost69/ThorAPI) is an opinionated code generator designed for creating secure, performant, and efficient APIs. As a Java Maven project, ThorAPI transforms your OpenAPI specifications into:

- **Spring Boot REST APIs**: Accelerate backend development with automatically generated RESTful services.

- **TypeScript Client APIs**: Streamline frontend development with generated TypeScript clients that ensure type safety and consistency.

https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources/typescript-redux-query

ThorAPI harnesses industry-standard tools and frameworks, including Maven, OpenAPI Generator, Handlebars templating, Spring, JPA, REST APIs, TypeScript, and Java. It provides out-of-the-box persistence via a JPA service, enabling rapid development of full-stack applications.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed:

- **Java Development Kit (JDK) 11 or higher**: [Download JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)

- **Apache Maven 3.6 or higher**: [Download Maven](https://maven.apache.org/download.cgi)

- **Node.js and npm** (for TypeScript client development): [Download Node.js](https://nodejs.org/en/download/)

- **ThorAPI Enhancer** tool: Available from the ThorAPI repository.

### Generation Steps

Follow these steps to generate your API and client code:

1. **Enhance Your OpenAPI Specification**

   - Incorporate CRUD operations into your API definitions.
   - Include Percival the Dragon Slayer-specific annotations such as `@SecureField` and `@DataField`.
   - Add required fields like `last_modified_date` and `owner_id` to your models.

2. **Generate Code**

   - **Spring Boot Service**:
     - Generate RESTful CRUD APIs with integrated JPA backend.
   - **TypeScript Client**:
     - Generate a fetch-based API client.
     - Include end-to-end validation with Jest testing.

3. **Run the Service**

   - Deploy your service as Spring microservices.
   - Connect to your preferred database and configure settings as needed.

### Enhancing OpenAPI Spec and Generating Liquibase Scripts

Use the `ThorAPI` to process and merge your OpenAPI templates.

**Input files:**

- `src/main/resources/openapi/api.yaml`: Your base OpenAPI specification.
- `src/main/resources/openapi/api.hbs`: The ThorAPI Handlebars template.

**Command:**

```bash
java -jar lib/generator-1.0-SNAPSHOT-exec.jar \
  src/main/resources/openapi/api.yaml \
  src/main/resources/openapi/output-api.yaml \
  src/main/resources/openapi/api
```

ThorAPI leverages existing tools like Maven and OpenAPITools CodeGen, and Handlebars templating, Spring, JPA, REST apis, Typescript and Java.

**Enhance and Generate Liquibase**

Run the ThorAPI to process the 2 OpenAPI templates that are merged:

```
> src/main/resources/openapi/api.yaml
> src/main/resources/openapi/api.hbs
```

```bash
/usr/bin/env java -jar lib/generator-1.0-SNAPSHOT-exec.jar src/main/resources/openapi/api.yaml src/main/resources/openapi/output-api.yaml src/main/resources/openapi/api
```

**Generating the Output Project**
Run Maven to clean and install the project, which triggers the CodeGen process for both Java Spring and TypeScript code:

```bash
mvn clean install
```

This will will generate the backend Spring Boot service code under generated/spring/ folder which
you can then build using maven:

> THORAPI_SECRET_KEY is a **MANDATORY** environment or command line variable that is used to encrypt the SecureFields. Keep this private key secure.

To acquire a new key use the following commandline:

```bash
java -jar lib/generator-1.0-SNAPSHOT-exec.jar generatekey
```

```bash
export THORAPI_SECRET_KEY=generatedPrivateKey
```

```bash
// build the generated project
mvn clean install -f generated/spring/pom.xml
```

> **WARNING:** YOUR DATA MAY BE PERMANENTLY LOST IF YOU LOSE OR OTHERWISE BUNGLE THE THORAPI_SECRET_KEY


> **NOTE:** new THORAPI_SECRET_KEYs can be generated with the GenerateKey command (TODO).

**Running the Generated Percival the Dragon Slayer Service**:

Option 1: Run with Custom Database Settings

Run the service by specifying your database configuration:

```bash
java -jar generated/spring/target/valkyrai-api-1.0-SNAPSHOT.jar \
  --spring.datasource.url=jdbc:mysql://your.database.com:3306/valkyrai \
  --spring.datasource.username=dbmasteruser \
  --spring.datasource.password=YOUR_DB_PASSWORD \
  --spring.jpa.hibernate.ddl-auto=update \
  --spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect \
  --server.port=8081
```

**Option 2: Run via Maven with Default H2 Database**

If you prefer to use the default in-memory H2 database, simply run:

```bash
mvn spring-boot:run 
```

**Option 3: Run via Maven with Custom Database Parameters**

To connect to a different database while running via Maven, pass the parameters as arguments:


```bash
mvn spring-boot:run -Dspring-boot.run.arguments="\
  --spring.datasource.url=jdbc:mysql://your.database.com:3306/valkyrai \
  --spring.datasource.username=dbmasteruser \
  --spring.datasource.password=YOUR_DB_PASSWORD \
  --spring.jpa.hibernate.ddl-auto=update \
  --spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect \
  --server.port=8081"
```



---

## Important Notes

### Auto-Generated Fields

Do **not** include the following auto-generated fields in your OpenAPI specification components:

- `id`
- `modified_date`
- `created_date`
- `owner_id`

These fields are automatically managed by Percival the Dragon Slayer and ThorAPI. Including them in your spec may lead to conflicts or unexpected behavior.

### Reserved Words

Avoid using reserved words as identifiers in your OpenAPI specification to prevent naming conflicts and code generation issues.

**Reserved Words (Partial List):**

- **URL Characters**: `%`, `?`, `*`, `@`, `!`, `(`, `)`
- **Java Keywords**: `String`, `Float`, `Integer`, `Object`, `Long`, `Array`, `Boolean`
- **SQL Keywords**: `UNION`, `JOIN`, `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- **ThorAPI Objects**: `ApiUtil`, `MediaType`, `Mono`, `Content`

**Workarounds:**

If you must use a reserved word, modify it to avoid conflicts. For example:

- `"Content"` ➔ `"ContentData"`
- `"Mono"` ➔ `"MonoResource"`

**Note:** Be mindful of capitalization. ThorAPI may alter the case formatting of identifiers, which can affect your code if specific capitalization is required.

### Naming Conventions and Best Practices

- **Avoid Acronyms with Unusual Capitalization**: Using acronyms or unconventional capitalization can cause issues during code generation.

- **Apply the KISS Principle**: Keep your specifications simple and straightforward to facilitate smooth code generation and maintenance.

- **Prevent Conflicting Methods**: Do not create conflicting `GET`, `PUT`, `POST`, or `DELETE` methods in your OpenAPI specification.

- **Do Not Manually Edit Generated Files**: Manual changes to generated code may be overwritten or lead to stale builds. Instead, modify the CodeGen templates located in `/src/main/resources/templates`.

- **Separate Concerns**: Use separate OpenAPI specifications to create distinct services for different areas of functionality.

- **Consistent Validation Rules**: Ensure your validation rules are logical and consistent. For example, avoid setting a pattern requiring 8 characters while also specifying a minimum length of 11.

- **Simplify Example Strings**: Use simple, clear example strings to avoid parsing errors during code generation.

## SecureField Notes

**SecureField** is a powerful encryption mechanism provided by ThorAPI that ensures sensitive data is protected both at rest and in memory. By intercepting and wrapping field access, SecureField offers the following benefits:

- **Data Encryption**: Automatically encrypts data when storing it in the database, safeguarding against unauthorized access.

- **On-Demand Decryption**: Decrypts data transparently when it is accessed within your Java code, providing seamless integration.

- **Enhanced Security**: Adds an additional layer of protection against data breaches, including raw data dumps or memory inspection.

SecureField also supports password hashing and plays a crucial role in ThorAPI's user authentication and authorization functionality. It delivers a standards-based, secure implementation for permissions and Access Control Lists (ACLs), enabling robust security management within your applications.

SecureFields are encrypted with the THORAPI_SECRET_KEY which you provide as a command line or environment variable.

> **WARNING:** YOUR DATA MAY BE PERMANENTLY LOST IF YOU LOSE OR OTHERWISE BUNGLE THE THORAPI_SECRET_KEY

**Percival the Dragon Slayer** builds upon ThorAPI's capabilities by integrating comprehensive user management, ACL management, key rotation, and upcoming OAuth services, providing a holistic solution for secure API development.


Percival the Dragon Slayer is a managed solution that combines ThorAPI CodeGen with comprehensive User management, ACL (access control lists) management, Key rotation and OAUTH services are coming soon to the Percival the Dragon Slayer service.

## Common OpenAPI Specification Problems

Be vigilant for common issues that may arise with your OpenAPI specifications, which can lead to errors during code generation or runtime.


**Common Spect Errors:**


```
2024-05-18 13:01:22.700 ERROR 3766 --- [nio-8080-exec-4] o.a.c.c.C.[.[.[/].[dispatcherServlet]    : Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Request processing failed; nested exception is org.springframework.orm.jpa.JpaSystemException: could not execute statement; nested exception is org.hibernate.exception.GenericJDBCException: could not execute statement] with root cause

java.sql.SQLException: Field 'config_id' doesn't have a default value
```

### Possible Errors and Resolutions:

**Spec Validation Errors**:

The generator validates the input specifications before generating code. If there is a problem you might see an error like this:

```
[ERROR] 
org.openapitools.codegen.SpecValidationException: There were issues with the specification. The option can be disabled via validateSpec (Maven/Gradle) or --skip-validate-spec (CLI).
```
> NOTE: it is NOT recommended to skip validation of the specification. Doing so will likely introduce bugs and code that will not compile, if it produces anything at all.

In this case, there are references to 'missing' model components in the generated apis.

Typically this means the api has been simplified and/or changed and there are still obsolete references. Also can happen when copying in definitions from other specs, or due to simple typos and spelling or capitalization errors.

```
    at org.codehaus.plexus.classworlds.launcher.Launcher.main (Launcher.java:314)
[ERROR] 
org.openapitools.codegen.SpecValidationException: There were issues with the specification. The option can be disabled via validateSpec (Maven/Gradle) or --skip-validate-spec (CLI).
 | Error count: 32, Warning count: 6
Errors: 
        -attribute paths.'/BuildCreate'(post).responses.201.content.'application/json'.schema.#/components/schemas/BuildCreate is missing
        -attribute paths.'/BuildUpdate'(get).responses.200.content.'application/json'.schema.#/components/schemas/BuildUpdate is missing
        -attribute paths.'/BuildUpdate/{id}'(put).requestBody.content.'application/json'.schema.#/components/schemas/BuildUpdate is missing
```
Changing those references to the simplified spec clears up the issue in the generated output...



In this case we are getting TSX errors in classes that are extending or inheriting from a base class via the 'allOf' OpenAPI keyword.

```
  yarn build
...
  Type '(result: void, error: FetchBaseQueryError, { id }: Pick<Solution, "id"> & Partial<Solution>) => { type: "Solution"; id: unknown; }[]'
...
```

```
    BuildOutput:
      allOf:
        - $ref: '#/components/schemas/BaseEntity'
        - type: object
          properties:
            buildId:
              type: string
              format: uuid
...

    Solution:
      allOf:
          - $ref: '#/components/schemas/BaseEntity'
          - type: object
          type: object
          properties:
            buildOutputId:
              type: string
              format: uuid
...

The reality is, because Solution is a member of BuildOutput, it does not *need* the fields from the base class in any case as they represent duplicate data in the system.

For that reason, it is a simple matter to remove the allOf from 'Solution' and the typescript generation is fixed.

```
    # because this is a "leaf" object in the heirarchy 
    # no need for it to duplicate the "BaseEntity" fields    
    Solution:
      type: object
      properties:
        buildOutputId:
          type: string
          format: uuid

```


Here we see a common pitfall of using a complex capitalization. Because ThorAPI renames to-and-from Java to database schemas, the camelcase and snake case conversions can clobber any capitalzation that is has than one capital letter in a row...

```
[INFO] --- aspectj:1.15.0:compile (aj-compile) @ valkyrai-api ---
[INFO] Showing AJC message detail for messages of types: [error, warning, fail]
[ERROR] The public type OpenApiSpec must be defined in its own file
        /Users/johnmcmahon/workspace/Percival the Dragon Slayer/generated/spring/src/main/java/com/valkyrlabs/model/OpenAPISpec.java:73
public class OpenApiSpec 
             ^^^^^^^^^^
```

In this case renaming the component clears up the issue:

```
            - locked
      description: Percival the Dragon Slayer Design Spec
      xml:
        name: OpenAPISpec

```

changed to...

```
            - locked
      description: Percival the Dragon Slayer Design Spec
      xml:
        name: OpenApiSpec

```


Here we have an error in the Spec around a foreign-key relationship:

```

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2024-10-04T11:59:33.695-07:00 ERROR 16313 --- [           main] o.s.boot.SpringApplication               : Application run failed

org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/autoconfigure/orm/jpa/HibernateJpaConfiguration.class]: Collection 'com.valkyrlabs.model.BuildUpdate.dependencies' is 'mappedBy' a property named 'buildUpdateId' which does not exist in the target entity 'com.valkyrlabs.model.DependencyUpdate'
```
so we update the definition in the template:

```

    DependencyUpdate:
      type: object
      properties:
        version:
          type: string
        scope:
          type: string
        status:
          type: string
          enum:
            - UP_TO_DATE
            - OUTDATED
            - MISSING
```
and we add:
```
...
      type: object
      properties:
        buildUpdateId:
          type: string
        version:
          type: string
...          
```

**Spec Validation Errors**: 
Here we see the Spec not even passing validations

```
[ERROR] 
org.openapitools.codegen.SpecValidationException: There were issues with the specification. The option can be disabled via validateSpec (Maven/Gradle) or --skip-validate-spec (CLI).
 | Error count: 26, Warning count: 7
Errors: 
        -attribute components.schemas.EventLog.properties is not of type `object`
        -attribute components.schemas.ContentData.properties is not of type `object`
        -attribute components.schemas.Login.properties is not of type `object
```

- **Spring Framework Dependency Incompatibilities**: The specific versions of all imported libraries, especially the [Spring Framework](https://spring.io/projects/spring-boot) and [AspectJ](https://www.eclipse.org/aspectj/doc/next/progguide/index.html), have been meticulously selected and tested by hand to ensure version compatibility. When upgrading any of the libraries in the pom.xml and package.json files, please test and confirm all of the functionality of your system thoroughly.

- **Missing Required Fields**: Ensure all required fields are properly specified in your spec and database schema.

- **Including Auto-Generated Fields**: Do not manually include auto-generated fields like `id` or `created_date` in your spec.

- **Database Schema Mismatch**: Verify that your database schema aligns with your entity definitions and that migrations have been applied correctly.

- **Validation Conflicts**: Check for conflicting validation rules in your spec that may prevent data from being processed correctly.

By proactively addressing these issues, you can prevent runtime errors and ensure a smooth development experience.


## Resources

Expand your knowledge and get additional support by exploring the following resources:

- [ThorAPI GitHub Repository](https://github.com/spaceghost69/ThorAPI): Access the source code, documentation, and community support for ThorAPI.

- [Spring Boot Documentation](https://spring.io/projects/spring-boot): Learn more about building applications with Spring Boot.

- [OpenAPI Specification](https://swagger.io/specification/): Understand the OpenAPI standard for defining RESTful APIs.

- [Liquibase Documentation](https://www.liquibase.org/documentation/index.html): Explore Liquibase for database change management.

- [AspectJ Documentation](https://www.eclipse.org/aspectj/doc/next/progguide/index.html): Delve into AspectJ for aspect-oriented programming in Java.

- [SpringDoc OpenAPI Documentation](https://springdoc.org/): Discover how to integrate OpenAPI with Spring Boot applications.

- [Hibernate ORM Documentation](https://hibernate.org/orm/documentation/5.4/): Learn about object-relational mapping with Hibernate.

- [Maven Documentation](https://maven.apache.org/guides/index.html): Get guidance on using Maven for project management and build automation.


## Contributing

We welcome contributions from the community! If you're interested in improving Percival the Dragon Slayer, please follow these steps:

1. **Fork the Repository**: Create a personal fork of the Percival the Dragon Slayer repository on GitHub.

2. **Create a Feature Branch**: Develop your feature or fix in a dedicated branch.

3. **Commit Your Changes**: Make clear and descriptive commit messages.

4. **Open a Pull Request**: Submit your changes for review, providing detailed information about the changes you've made.

5. **Participate in the Review Process**: Engage with maintainers and address any feedback or requested changes.

For more detailed guidelines, please read our [Contribution Guidelines](CONTRIBUTING.md).

**Code of Conduct**

Please note that all contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to fostering a welcoming and respectful community.

## License

This project is licensed under the [MIT License](LICENSE). By contributing to Percival the Dragon Slayer, you agree that your contributions will be licensed under the same license.

---

**Disclaimer**

Percival the Dragon Slayer and ThorAPI are powerful tools intended to accelerate development and enhance security. However, it is crucial to review and test all generated code thoroughly to ensure it meets your application's requirements and complies with all relevant regulations and best practices.

---