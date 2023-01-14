

// create table user(id int not null auto_increment primary key,
//     name varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     email varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     password varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     confirm_password varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     plan_id int COLLATE utf8mb4_unicode_ci,
//     company_name varchar(255) COLLATE utf8mb4_unicode_ci,
//     user_company_role	int COLLATE utf8mb4_unicode_ci,
//     address varchar(255) COLLATE utf8mb4_unicode_ci,
//     country varchar(255) COLLATE utf8mb4_unicode_ci,
//     city varchar(255) COLLATE utf8mb4_unicode_ci,
//     pin_zip varchar(255) COLLATE utf8mb4_unicode_ci,
//     mobile_contact varchar(255) COLLATE utf8mb4_unicode_ci,
//     office_contact varchar(255) COLLATE utf8mb4_unicode_ci,
//     vat_detail tinyint(1),
//     vat_date Date,
//     vat_number	varchar(255) COLLATE utf8mb4_unicode_ci,
//     vat_image	varchar(255) COLLATE utf8mb4_unicode_ci,
//     purchase_additional_login	tinyint(1),
//     no_of_login_user int(10),
// )ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;











// create table company_role_schema(id int not null auto_increment primary key,
//         company_role varchar(255) COLLATE utf8mb4_unicode_ci not null,
//         created_at timestamp,
//         updated_at timestamp)
 
        
// create table project_sector_schema(id int not null auto_increment primary key,
//     name varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     created_at timestamp,
//     updated_at timestamp)





//     create table sector_of_user_schema(id int not null auto_increment primary key,
//         name varchar(255) COLLATE utf8mb4_unicode_ci not null,
//         created_at timestamp,
//         updated_at timestamp)
    

// create table plan_purchase(id int not null auto_increment primary key,
//     plan_name varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     site_id int not null,sequence int not null,
//     plan_feature_id int not null,
//     status TINYINT(1),
//     plan_description_id int null,
//     tenders_plan TINYINT(1),no_of_tenders varchar(255) COLLATE utf8mb4_unicode_ci,
//     projects_plan TINYINT(1),no_of_projects varchar(255) COLLATE utf8mb4_unicode_ci ,
//     export_to_excel_plan TINYINT(1),
//     plan_cost varchar(255) COLLATE utf8mb4_unicode_ci,
//     addition_user_cost varchar(255) COLLATE utf8mb4_unicode_ci,
//     discount_plan varchar(255) COLLATE utf8mb4_unicode_ci,
//     date varchar(255) COLLATE utf8mb4_unicode_ci,
//     compare_plan_description_id int null
//   );







