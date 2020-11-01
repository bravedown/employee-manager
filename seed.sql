USE employee_tracker_db;

INSERT INTO department (name) VALUE ("Android");
INSERT INTO department (name) VALUE ("iOS");
INSERT INTO department (name) VALUE ("React");

INSERT INTO role (title, salary, department_id) 
VALUES ("Android Engineer", "80000.00", 1);
INSERT INTO role (title, salary, department_id) 
VALUES ("iOS Engineer", "80000.00", 2);
INSERT INTO role (title, salary, department_id) 
VALUES ("React Engineer", "80000.00", 3);
INSERT INTO role (title, salary, department_id) 
VALUES ("Android Senior Engineer", "120000.00", 1);
INSERT INTO role (title, salary, department_id) 
VALUES ("iOS Senior Engineer", "120000.00", 2);
INSERT INTO role (title, salary, department_id) 
VALUES ("React Senior Engineer", "120000.00", 3);
INSERT INTO role (title, salary, department_id) 
VALUES ("Android Manager", "100000.00", 1);
INSERT INTO role (title, salary, department_id) 
VALUES ("iOS Manager", "100000.00", 2);
INSERT INTO role (title, salary, department_id) 
VALUES ("React Manager", "100000.00", 3);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ('Joe', 'Schmo', 7);
INSERT INTO employee (first_name, last_name, role_id) 
VALUES ('Joseph', 'Schmoseph', 8);
INSERT INTO employee (first_name, last_name, role_id) 
VALUES ('Goody', 'Two-Shoes', 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('James', 'Smith', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Snow', 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Sally', 'Brown', 3, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Michael', 'Johnson', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Maria', 'Martinez', 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Jane', 'Doe', 6, 3);
