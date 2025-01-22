CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  label VARCHAR(100) NOT NULL
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  address VARCHAR(100) NOT NULL,
  postal_code VARCHAR(5) NOT NULL,
  city VARCHAR(100) NOT NULL,
  tel VARCHAR(15) NOT NULL,
  is_active BOOLEAN DEFAULT FALSE,
  is_role BOOLEAN NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE candidate (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cv VARCHAR(100),
  photo VARCHAR(100),
  user_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id),
  is_disabled BOOLEAN  NOT NULL
);