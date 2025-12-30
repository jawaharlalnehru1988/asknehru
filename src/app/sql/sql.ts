export interface SqlCommand{
    short: string;
    long: string;
}

export interface SqlContent{
    short: string;
    content: string;
}

export class SqlTopics{
    sqlCommandTypes: SqlCommand[] = [
        {short: "SQL Intro", long: "Structured Query Language"},
        {short: "DDL", long: "Data Definition Language"},
        {short: "DML", long: "Data Manipulation Language"},
        {short: "DCL", long: "Data Control Language"},
        {short: "TCL", long: "Transaction Control Language"},
        {short: "DQL", long: "Data Query Language"},
        {short: "Data Types", long: "Types of data in SQL"},
      ];

      expandableTopics = [
        {short: "SQL Intro", content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #007bff; text-align: center;">Introduction to SQL</h2>
      <p><strong>SQL (Structured Query Language)</strong> is a powerful language used for managing and querying relational databases. It enables users to <span style="color: #28a745;">create, read, update, and delete</span> data in databases.</p>
      
      <h3 style="color: #dc3545;">Why SQL?</h3>
      <ul style="padding-left: 20px;">
        <li>SQL is used to access and manipulate databases efficiently.</li>
        <li>It follows a standardized language structure.</li>
        <li>Most database management systems (DBMS) support SQL.</li>
      </ul>
      
      <h3 style="color: #17a2b8;">Basic SQL Commands</h3>
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <tr style="background-color: #f8f9fa;">
          <th style="border: 1px solid #ddd; padding: 8px;">Command</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>SELECT</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Retrieves data from a database.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>INSERT</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Inserts new data into a table.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>UPDATE</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Modifies existing records.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><code>DELETE</code></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Removes data from a table.</td>
        </tr>
      </table>

      <h3 style="color: #6f42c1;">Example SQL Query</h3>
      <pre style="background-color:rgb(48, 45, 45); color: #fff; padding: 10px; border-left: 5px solid #007bff;">
        SELECT * FROM students WHERE age > 18;
      </pre>

      <p>Here, we use the <code>SELECT</code> command to retrieve all data from the <code>students</code> table where the age is greater than 18.</p>

      <h3 style="color: #28a745;">Types of SQL Commands</h3>
        <p>SQL commands are broadly classified into the following categories:</p>
        <ul style="padding-left: 20px;">
          <li><strong>DDL</strong> – Data Definition Language commands used to define, modify, and manage database structures.</li>
          <li><strong>DML</strong> – Data Manipulation Language commands used to insert, update, and delete data from a database.</li>
          <li><strong>DCL</strong> – Data Control Language commands used to manage access to databases and objects.</li>
          <li><strong>TCL</strong> – Transaction Control Language commands used to manage transactions and control the execution of SQL statements.</li>
          <li><strong>DQL</strong> – Data Query Language commands used to retrieve data from a database.</li>
        </ul>

      <h3 style="color: #007bff;">Conclusion</h3>
        <p>SQL is a powerful language that allows users to interact with databases efficiently. By learning SQL, you can perform a wide range of operations on databases, from simple queries to complex data manipulations.</p>



    </div>`},
    {short: "DDL", content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">DDL (Data Definition Language) Commands</h2>
  
  <p>
    <strong>DDL (Data Definition Language)</strong> is a subset of SQL used to define, modify, and manage database structures such as tables, schemas, and indexes. 
    DDL commands do not manipulate data but focus on the database structure.
  </p>

  <h3 style="color: #dc3545;">Key DDL Commands</h3>
  <ul style="padding-left: 20px;">
    <li><strong>CREATE</strong> – Used to create database objects like tables, views, and indexes.</li>
    <li><strong>ALTER</strong> – Used to modify the structure of an existing table.</li>
    <li><strong>DROP</strong> – Used to delete database objects permanently.</li>
    <li><strong>TRUNCATE</strong> – Used to remove all records from a table without deleting the table itself.</li>
    <li><strong>RENAME</strong> – Used to rename a table or column.</li>
  </ul>

  <h3 style="color: #17a2b8;">Examples of DDL Commands</h3>

  <h4 style="color: #28a745;">1. CREATE Command</h4>
  <p>The <code>CREATE</code> command is used to create a new table.</p>
  <pre style="background-color:rgb(20, 18, 18); color: #fff; padding: 10px; border-left: 5px solid #007bff;">
    CREATE TABLE Employees (
        ID INT PRIMARY KEY,
        Name VARCHAR(50),
        Age INT,
        Department VARCHAR(50)
    );
  </pre>

  <h4 style="color: #28a745;">2. ALTER Command</h4>
  <p>The <code>ALTER</code> command modifies an existing table by adding, deleting, or modifying columns.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    ALTER TABLE Employees ADD Salary DECIMAL(10,2);
  </pre>

  <h4 style="color: #28a745;">3. DROP Command</h4>
  <p>The <code>DROP</code> command permanently removes a table from the database.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    DROP TABLE Employees;
  </pre>

  <h4 style="color: #28a745;">4. TRUNCATE Command</h4>
  <p>The <code>TRUNCATE</code> command deletes all records from a table but keeps the structure intact.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    TRUNCATE TABLE Employees;
  </pre>

  <h4 style="color: #28a745;">5. RENAME Command</h4>
  <p>The <code>RENAME</code> command renames an existing table.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    RENAME TABLE Employees TO Staff;
  </pre>
</div>
`},
{ short: "DML", content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">DML (Data Manipulation Language) Commands</h2>
  
  <p>
    <strong>DML (Data Manipulation Language)</strong> is a subset of SQL that allows users to retrieve, insert, update, and delete data from a database.
    Unlike DDL commands, DML commands modify the actual data stored in tables.
  </p>

  <h3 style="color: #dc3545;">Key DML Commands</h3>
  <ul style="padding-left: 20px;">
    <li><strong>SELECT</strong> – Retrieves data from a database.</li>
    <li><strong>INSERT</strong> – Adds new records to a table.</li>
    <li><strong>UPDATE</strong> – Modifies existing records in a table.</li>
    <li><strong>DELETE</strong> – Removes records from a table.</li>
  </ul>

  <h3 style="color: #17a2b8;">Examples of DML Commands</h3>

  <h4 style="color: #28a745;">1. SELECT Command</h4>
  <p>The <code>SELECT</code> command is used to fetch data from one or more tables.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    SELECT * FROM Employees;
  </pre>
  <p><strong>Example with condition:</strong> Retrieving employees older than 30.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    SELECT Name, Age FROM Employees WHERE Age > 30;
  </pre>

  <h4 style="color: #28a745;">2. INSERT Command</h4>
  <p>The <code>INSERT</code> command adds new records to a table.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    INSERT INTO Employees (ID, Name, Age, Department) 
    VALUES (1, 'John Doe', 35, 'IT');
  </pre>

  <h4 style="color: #28a745;">3. UPDATE Command</h4>
  <p>The <code>UPDATE</code> command modifies existing data in a table.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    UPDATE Employees SET Age = 36 WHERE ID = 1;
  </pre>

  <h4 style="color: #28a745;">4. DELETE Command</h4>
  <p>The <code>DELETE</code> command removes records from a table.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    DELETE FROM Employees WHERE ID = 1;
  </pre>

  <h3 style="color: #6f42c1;">Difference Between DML & DDL</h3>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Feature</th>
      <th style="border: 1px solid #ddd; padding: 8px;">DDL</th>
      <th style="border: 1px solid #ddd; padding: 8px;">DML</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Purpose</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Defines database structure</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Modifies database records</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Commands</td>
      <td style="border: 1px solid #ddd; padding: 8px;">CREATE, ALTER, DROP, TRUNCATE</td>
      <td style="border: 1px solid #ddd; padding: 8px;">SELECT, INSERT, UPDATE, DELETE</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Affects Data?</td>
      <td style="border: 1px solid #ddd; padding: 8px;">No</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Yes</td>
    </tr>
  </table>
</div>`
},
{short: "DCL", content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">DCL (Data Control Language) Commands</h2>
  
  <p>
    <strong>DCL (Data Control Language)</strong> is a subset of SQL that deals with database security and access control. 
    It is used to grant or revoke access permissions to users for database objects.
  </p>

  <h3 style="color: #dc3545;">Key DCL Commands</h3>
  <ul style="padding-left: 20px;">
    <li><strong>GRANT</strong> – Provides specific privileges to users.</li>
    <li><strong>REVOKE</strong> – Removes assigned privileges from users.</li>
  </ul>

  <h3 style="color: #17a2b8;">Examples of DCL Commands</h3>

  <h4 style="color: #28a745;">1. GRANT Command</h4>
  <p>The <code>GRANT</code> command is used to give specific privileges to users or roles.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    GRANT SELECT, INSERT ON Employees TO 'john';
  </pre>
  <p><strong>Explanation:</strong> Grants the user <code>john</code> permission to perform SELECT and INSERT operations on the Employees table.</p>

  <h4 style="color: #28a745;">2. REVOKE Command</h4>
  <p>The <code>REVOKE</code> command removes privileges from a user.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    REVOKE INSERT ON Employees FROM 'john';
  </pre>
  <p><strong>Explanation:</strong> Revokes INSERT privileges from user <code>john</code> on the Employees table.</p>

  <h3 style="color: #6f42c1;">Comparison Between DCL & DML</h3>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Feature</th>
      <th style="border: 1px solid #ddd; padding: 8px;">DCL</th>
      <th style="border: 1px solid #ddd; padding: 8px;">DML</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Purpose</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Controls access permissions</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Manipulates data in tables</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Commands</td>
      <td style="border: 1px solid #ddd; padding: 8px;">GRANT, REVOKE</td>
      <td style="border: 1px solid #ddd; padding: 8px;">SELECT, INSERT, UPDATE, DELETE</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Affects Data?</td>
      <td style="border: 1px solid #ddd; padding: 8px;">No</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Yes</td>
    </tr>
  </table>
</div>
`},
{short: "TCL", content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">TCL (Transaction Control Language) Commands</h2>
  
  <p>
    <strong>TCL (Transaction Control Language)</strong> is a subset of SQL used to manage transactions in a database. 
    Transactions ensure data integrity and consistency, allowing multiple operations to be executed as a single unit.
  </p>

  <h3 style="color: #dc3545;">Key TCL Commands</h3>
  <ul style="padding-left: 20px;">
    <li><strong>COMMIT</strong> – Saves all changes made by a transaction permanently.</li>
    <li><strong>ROLLBACK</strong> – Undoes all uncommitted changes in a transaction.</li>
    <li><strong>SAVEPOINT</strong> – Creates intermediate checkpoints within a transaction.</li>
  </ul>

  <h3 style="color: #17a2b8;">Examples of TCL Commands</h3>

  <h4 style="color: #28a745;">1. COMMIT Command</h4>
  <p>The <code>COMMIT</code> command is used to save all changes made during the transaction permanently in the database.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    BEGIN TRANSACTION;
    INSERT INTO Employees (id, name, salary) VALUES (101, 'Alice', 50000);
    COMMIT;
  </pre>
  <p><strong>Explanation:</strong> The new employee record is permanently saved in the database.</p>

  <h4 style="color: #28a745;">2. ROLLBACK Command</h4>
  <p>The <code>ROLLBACK</code> command undoes all uncommitted changes in the current transaction.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    BEGIN TRANSACTION;
    UPDATE Employees SET salary = 60000 WHERE id = 101;
    ROLLBACK;
  </pre>
  <p><strong>Explanation:</strong> The salary update for employee ID 101 is reverted.</p>

  <h4 style="color: #28a745;">3. SAVEPOINT Command</h4>
  <p>The <code>SAVEPOINT</code> command sets a savepoint within a transaction that allows partial rollbacks.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    BEGIN TRANSACTION;
    INSERT INTO Employees (id, name, salary) VALUES (102, 'Bob', 55000);
    SAVEPOINT sp1;
    INSERT INTO Employees (id, name, salary) VALUES (103, 'Charlie', 60000);
    ROLLBACK TO sp1;
    COMMIT;
  </pre>
  <p><strong>Explanation:</strong> The record for 'Charlie' is rolled back, but Bob's record is committed.</p>

  <h3 style="color: #6f42c1;">Difference Between TCL & DML</h3>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Feature</th>
      <th style="border: 1px solid #ddd; padding: 8px;">TCL</th>
      <th style="border: 1px solid #ddd; padding: 8px;">DML</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Purpose</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Manages transactions</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Manipulates data</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Commands</td>
      <td style="border: 1px solid #ddd; padding: 8px;">COMMIT, ROLLBACK, SAVEPOINT</td>
      <td style="border: 1px solid #ddd; padding: 8px;">SELECT, INSERT, UPDATE, DELETE</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Affects Data?</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Yes, but focuses on transactions</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Yes, modifies records</td>
    </tr>
  </table>
</div>
`},
{short: "DQL", content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">DQL (Data Query Language) Commands</h2>
  
  <p>
    <strong>DQL (Data Query Language)</strong> is used to retrieve data from a database. 
    It includes the <code>SELECT</code> statement, which allows querying data from tables based on conditions.
  </p>

  <h3 style="color: #dc3545;">Key DQL Command</h3>
  <ul style="padding-left: 20px;">
    <li><strong>SELECT</strong> – Used to fetch data from one or more tables.</li>
  </ul>

  <h3 style="color: #17a2b8;">Examples of DQL Commands</h3>

  <h4 style="color: #28a745;">1. Retrieving All Columns</h4>
  <p>The following query fetches all columns from the <code>Employees</code> table.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    SELECT * FROM Employees;
  </pre>

  <h4 style="color: #28a745;">2. Retrieving Specific Columns</h4>
  <p>This query retrieves only specific columns (name and salary) from the <code>Employees</code> table.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    SELECT name, salary FROM Employees;
  </pre>

  <h4 style="color: #28a745;">3. Filtering Data with WHERE</h4>
  <p>To fetch records based on a condition, use the <code>WHERE</code> clause.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    SELECT * FROM Employees WHERE salary > 50000;
  </pre>

  <h4 style="color: #28a745;">4. Ordering Results with ORDER BY</h4>
  <p>To sort results in ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    SELECT name, salary FROM Employees ORDER BY salary DESC;
  </pre>

  <h4 style="color: #28a745;">5. Limiting Results with LIMIT</h4>
  <p>To restrict the number of rows in the result.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    SELECT * FROM Employees LIMIT 5;
  </pre>

  <h3 style="color: #6f42c1;">Difference Between DQL & DML</h3>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Feature</th>
      <th style="border: 1px solid #ddd; padding: 8px;">DQL</th>
      <th style="border: 1px solid #ddd; padding: 8px;">DML</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Purpose</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Retrieves data</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Manipulates data</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Commands</td>
      <td style="border: 1px solid #ddd; padding: 8px;">SELECT</td>
      <td style="border: 1px solid #ddd; padding: 8px;">INSERT, UPDATE, DELETE</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Affects Data?</td>
      <td style="border: 1px solid #ddd; padding: 8px;">No, only retrieves data</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Yes, modifies records</td>
    </tr>
  </table>
</div>
`},
{short: "Data Types", content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #007bff; text-align: center;">SQL Data Types</h2>

  <p>
    <strong>SQL Data Types</strong> define the type of data that can be stored in a column. 
    SQL provides different categories of data types to store various kinds of data such as text, numbers, dates, and more.
  </p>

  <h3 style="color: #dc3545;">Types of SQL Data Types</h3>
  <p>SQL Data Types can be broadly classified into the following categories:</p>
  <ul style="padding-left: 20px;">
    <li><strong>String Data Types</strong> – Used to store text.</li>
    <li><strong>Numeric Data Types</strong> – Used to store numbers.</li>
    <li><strong>Date & Time Data Types</strong> – Used to store date and time values.</li>
    <li><strong>Boolean Data Type</strong> – Used to store <code>TRUE</code> or <code>FALSE</code>.</li>
    <li><strong>Other Data Types</strong> – JSON, XML, etc.</li>
  </ul>

  <h3 style="color: #17a2b8;">1. String Data Types</h3>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Example</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>CHAR(size)</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Fixed-length string (1-255 characters)</td>
      <td style="border: 1px solid #ddd; padding: 8px;">CHAR(10)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>VARCHAR(size)</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Variable-length string (1-65535 characters)</td>
      <td style="border: 1px solid #ddd; padding: 8px;">VARCHAR(255)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>TEXT</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Stores large text (up to 65,535 characters)</td>
      <td style="border: 1px solid #ddd; padding: 8px;">TEXT</td>
    </tr>
  </table>

  <h3 style="color: #17a2b8;">2. Numeric Data Types</h3>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Example</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>INT</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Stores whole numbers</td>
      <td style="border: 1px solid #ddd; padding: 8px;">INT(10)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>DECIMAL(p,s)</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Stores fixed-point numbers</td>
      <td style="border: 1px solid #ddd; padding: 8px;">DECIMAL(10,2)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>FLOAT</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Stores floating-point numbers</td>
      <td style="border: 1px solid #ddd; padding: 8px;">FLOAT(6,2)</td>
    </tr>
  </table>

  <h3 style="color: #17a2b8;">3. Date & Time Data Types</h3>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="background-color: #f8f9fa;">
      <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
      <th style="border: 1px solid #ddd; padding: 8px;">Example</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>DATE</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Stores date (YYYY-MM-DD)</td>
      <td style="border: 1px solid #ddd; padding: 8px;">'2025-01-31'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>DATETIME</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Stores date & time (YYYY-MM-DD HH:MM:SS)</td>
      <td style="border: 1px solid #ddd; padding: 8px;">'2025-01-31 14:30:00'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>TIME</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">Stores time (HH:MM:SS)</td>
      <td style="border: 1px solid #ddd; padding: 8px;">'14:30:00'</td>
    </tr>
  </table>

  <h3 style="color: #6f42c1;">4. Boolean Data Type</h3>
  <p>SQL uses <code>BOOLEAN</code> to store TRUE/FALSE values.</p>
  <pre style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #007bff;">
    CREATE TABLE Users (
        id INT PRIMARY KEY,
        name VARCHAR(100),
        isActive BOOLEAN
    );
  </pre>

  <h3 style="color: #6f42c1;">5. Other Data Types</h3>
  <ul style="padding-left: 20px;">
    <li><strong>JSON</strong> – Used to store JSON objects.</li>
    <li><strong>XML</strong> – Used to store XML data.</li>
    <li><strong>BLOB</strong> – Used to store binary data such as images and files.</li>
  </ul>
</div>
`}

      ]
}