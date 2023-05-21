import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Toy's Finder" + ' - ' + 'blog')
    return (
        <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000" className='my-20 space-y-12'>
            <div className='space-y-3 shadow-xl rounded-lg p-4 bg-white'>
                <h1 className='text-3xl font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>An access token is a short-lived credential that allows a user or application to access protected resources in an application. It is obtained during the authentication process and needs to be included with each request to the server.
                    <br />
                    A refresh token is a long-lived credential that is used to get a new access token when the current one expires. It helps avoid reauthentication and allows continuous access to protected resources.
                    <br />
                    On the client-side, the access token is typically stored in memory or local storage for easy access during requests. The refresh token, however, should be stored securely, such as in a secure HTTP-only cookie or a secure storage mechanism provided by the platform, to prevent unauthorized access.
                    <br />
                    By securely storing the refresh token and properly handling the access token, the client can maintain authorized access to resources without the user needing to repeatedly log in.</p>
            </div>
            <div className='space-y-3 shadow-xl rounded-lg p-4 bg-white'>
                <h1 className='text-3xl font-semibold'>Compare SQL and NoSQL databases?</h1>
                <p>SQL (Structured Query Language) databases are based on the relational model and use SQL as the query language. They have a predefined schema, handle structured data with well-defined relationships, and are suitable for complex queries and data integrity. SQL databases are vertically scalable and prioritize data consistency.
                    <br /><br />
                    NoSQL (Not Only SQL) databases are designed for unstructured or semi-structured data. They offer flexible schemas, allowing data to be stored in various formats. NoSQL databases are highly scalable, handle large amounts of data and high traffic, and excel in distributed environments. They prioritize scalability and availability over strict consistency and are horizontally scalable.

                    In summary, SQL databases are good for structured data, complex relationships, and strong consistency, while NoSQL databases excel with unstructured data, scalability, and availability in distributed systems.</p>
            </div>
            <div className='space-y-3 shadow-xl rounded-lg p-4 bg-white'>
                <h1 className='text-3xl font-semibold'>What is express js? What is Nest JS ?</h1>
                <p>Express.js is a lightweight and flexible web application framework that runs on Node.js. It simplifies the process of building web applications and APIs by providing an easy-to-use and minimalist approach. With Express.js, developers can handle routes, middleware, and HTTP requests with ease. It is known for its simplicity, speed, and extensive middleware ecosystem, making it a popular choice for building server-side applications.
                    <br />
                    NestJS, on the other hand, is a TypeScript-based web application framework that draws inspiration from Angular's architecture and concepts. It provides a structured and modular approach to building server-side applications. NestJS leverages decorators, dependency injection, and modules to create highly maintainable and scalable codebases. It supports various application types, including RESTful APIs, real-time applications with WebSockets, and GraphQL APIs. NestJS also offers features like built-in validation, error handling, and unit testing support.
                    <br />
                    In summary, Express.js focuses on simplicity and flexibility, allowing developers to quickly build web applications, while NestJS provides a more structured and opinionated framework with TypeScript support, suitable for larger projects and teams that prioritize maintainability and scalability.</p>
            </div>
            <div className='space-y-3 shadow-xl rounded-lg p-4 bg-white'>
                <h1 className='text-3xl font-semibold'>What is MongoDB aggregate and how does it work?</h1>
                <p>The MongoDB aggregation framework is a powerful tool for performing advanced data processing and analysis within the database. It works by using a pipeline of stages, each stage performing a specific operation on the data and passing the results to the next stage. The pipeline starts with a matching stage that filters the documents based on specified criteria. Then, the projection stage allows shaping the output by including or excluding fields or adding computed fields. The grouping stage groups documents together based on a key and performs aggregations within each group using operators like $sum, $avg, $max, and more. The sorting stage orders the documents, while the limiting and skipping stages control the number of documents returned. The $lookup stage allows for left outer joins with other collections, and the $unwind stage deconstructs array fields into multiple documents. MongoDB provides a wide range of aggregation operators to perform computations and transformations within the pipeline. By leveraging these stages and operators, you can construct complex queries to extract meaningful insights and perform advanced data analysis efficiently within MongoDB.</p>
            </div>
        </div>
    );
};

export default Blog;