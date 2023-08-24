INSERT INTO department (name)
VALUES
    ('maintenance'),
    ('nursing'),
    ('dietary');


INSERT INTO role (title, salary, department_id)
VALUES 
    ('RN', 70000, 2),
    ('LPN', 60000, 2),
    ('cook', 40000, 3),
    ('server', 20000, 3),
    ('electrician', 50000, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id )
VALUES 
    ('Sally', 'Jameson', 2, NULL),
    ('John', 'Fagan', 3, NULL),
    ('Carol', 'Davie', 1, NULL),
    ('Robert', 'Hill', 2, 'Sally Jameson'),
    ('Jessica', 'Harrison', 3, 'John Fagan');


    