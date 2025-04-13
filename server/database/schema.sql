-- SQLBook: Code
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
  role_id INT NOT NULL,
  is_active BOOLEAN DEFAULT FALSE,
  is_role BOOLEAN NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE company (
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(100) NOT NULL,
  sector VARCHAR(100) NOT NULL,
  employee_number INT,
  user_id INT NOT NULL,
  website_link VARCHAR(100),
  description TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE candidate (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cv VARCHAR(500),
  photo VARCHAR(500),
  user_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id),
  is_disabled BOOLEAN  NOT NULL
);

CREATE TABLE offer(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  logo VARCHAR(100),
  wage INT,
  description TEXT NOT NULL,
  location VARCHAR(100) NOT NULL,
  is_teleworking BOOLEAN,
  contract_type VARCHAR(100) NOT NULL,
  company_id INT NOT NULL,
  is_opened_to_disabled BOOLEAN NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  FOREIGN KEY (company_id) REFERENCES company(id)
);

CREATE TABLE favorite(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  offer_id INT NOT NULL,
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  candidate_id INT NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES candidate(id)
);

CREATE TABLE candidature (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  statut VARCHAR(100),
  is_refused BOOLEAN,
  candidate_id  INT NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES candidate(id),
  offer_id  INT NOT NULL,
  FOREIGN KEY (offer_id) REFERENCES offer(id)
);

CREATE TABLE tag(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) 
);

CREATE TABLE offer_tag(
  offer_id INT NOT NULL,
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  tag_id INT NOT NULL,
  FOREIGN KEY(tag_id) REFERENCES tag(id)
);



