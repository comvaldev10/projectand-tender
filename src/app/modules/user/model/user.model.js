

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
 
// create table contact_info(contact_info_id int not null auto_increment primary key,name varchar(255) COLLATE utf8mb4_unicode_ci,
// company_name varchar(255) COLLATE utf8mb4_unicode_ci,
// email text COLLATE utf8mb4_unicode_ci,
//  mobile_no text COLLATE utf8mb4_unicode_ci,
//  message text COLLATE utf8mb4_unicode_ci,
//  checkout tinyint(1),
//  soft_delete tinyint(1),
//  site_id text COLLATE utf8mb4_unicode_ci
//  )
        
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

// create table what_we_do(what_we_do_id int not null auto_increment primary key,
//     what_we_do_heading varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     what_we_do_description text COLLATE utf8mb4_unicode_ci not null,
//     what_we_do_button_name varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     what_we_do_button_link varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     image_heading text COLLATE utf8mb4_unicode_ci not null,
//     what_we_do_image text COLLATE utf8mb4_unicode_ci not null,
//     service_we_provide_heading varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     service_we_provide_sub_heading varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     service_we_provide_button_name varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     service_we_provide_button_link varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     third_section_heading1 text COLLATE utf8mb4_unicode_ci not null,
//     third_section_alt_tag  text COLLATE utf8mb4_unicode_ci not null,
//     insights_heading varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     insights_button_name varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     insights_button_link varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     insights_description text COLLATE utf8mb4_unicode_ci not null,
//     lead_and_insights_projects varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     lead_and_insights_tenders varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     lead_and_insights_contractors varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     lead_and_insights_consultants varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     industries_we_serve_heading varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     industries_we_serve_descripion varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     sectors_we_serve_heading varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     sectors_we_serve_description text COLLATE utf8mb4_unicode_ci not null,
//     sectors_we_serve_sector varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     latest_news_heading varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     latest_news_description text COLLATE utf8mb4_unicode_ci not null,
//     partner_advertisement_heading text COLLATE utf8mb4_unicode_ci not null,
//     partner_advertisement_description text COLLATE utf8mb4_unicode_ci not null,
//     partner_advertisement_button_name text COLLATE utf8mb4_unicode_ci not null,
//     partner_advertisement_button_link text COLLATE utf8mb4_unicode_ci not null,
//     partner_advertisement_alt_tag text COLLATE utf8mb4_unicode_ci not null,
//     partner_advertisement_start_date text COLLATE utf8mb4_unicode_ci not null,
//     partner_advertisement_end_date text COLLATE utf8mb4_unicode_ci not null,
//     partner_advertisement_image text COLLATE utf8mb4_unicode_ci not null,
    // seo_title varchar(255) COLLATE utf8mb4_unicode_ci not null,
    // seo_description text COLLATE utf8mb4_unicode_ci not null,
    // seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci not null,
    // seo_slug varchar(255) COLLATE utf8mb4_unicode_ci not null);

    // create table policy_info(policy_info_id int not null auto_increment primary key,
    //     message text COLLATE utf8mb4_unicode_ci,
    //         seo_title varchar(255) COLLATE utf8mb4_unicode_ci ,
    //         seo_description text COLLATE utf8mb4_unicode_ci ,
    //         seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci ,
    //         seo_slug varchar(255) COLLATE utf8mb4_unicode_ci,
    //     site_id varchar(255) COLLATE utf8mb4_unicode_ci
    //      );


    // create table cookie_info(cookie_info_id int not null auto_increment primary key,
    //     message text COLLATE utf8mb4_unicode_ci,
    //         seo_title varchar(255) COLLATE utf8mb4_unicode_ci ,
    //         seo_description text COLLATE utf8mb4_unicode_ci ,
    //         seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci ,
    //         seo_slug varchar(255) COLLATE utf8mb4_unicode_ci,
    //     site_id varchar(255) COLLATE utf8mb4_unicode_ci
    //      );

    // create table term_info(term_info_id int not null auto_increment primary key,
    //     message text COLLATE utf8mb4_unicode_ci,
    //         seo_title varchar(255) COLLATE utf8mb4_unicode_ci ,
    //         seo_description text COLLATE utf8mb4_unicode_ci ,
    //         seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci ,
    //         seo_slug varchar(255) COLLATE utf8mb4_unicode_ci,
    //     site_id varchar(255) COLLATE utf8mb4_unicode_ci
    //      );

// create table edit_project_sector(id int not null auto_increment primary key,
//     sector_name varchar(255) COLLATE utf8mb4_unicode_ci,
//     alt_tag varchar(255) COLLATE utf8mb4_unicode_ci,
//     listing_page_description text COLLATE utf8mb4_unicode_ci,
//     listing_page_image varchar(255) COLLATE utf8mb4_unicode_ci,
//     banner_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     banner_sub_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     section_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     short_description text COLLATE utf8mb4_unicode_ci,
//     detailed_description text COLLATE utf8mb4_unicode_ci,
//     inner_page_sector_name text COLLATE utf8mb4_unicode_ci,
//     inner_page_sector_select text COLLATE utf8mb4_unicode_ci,
//     inner_page_detailed_description text COLLATE utf8mb4_unicode_ci,
//     project_type1 text COLLATE utf8mb4_unicode_ci,
//     project_type1_title text COLLATE utf8mb4_unicode_ci,
//     project_type1_description text COLLATE utf8mb4_unicode_ci,
//     project_type2 text COLLATE utf8mb4_unicode_ci,
//     project_type2_title text COLLATE utf8mb4_unicode_ci,
//     project_type2_description text COLLATE utf8mb4_unicode_ci,
//     graph text COLLATE utf8mb4_unicode_ci,
//     graph_description text COLLATE utf8mb4_unicode_ci,
//     industry_report tinyint(1),
//     lastest_news text COLLATE utf8mb4_unicode_ci,
//     lastest_description text COLLATE utf8mb4_unicode_ci,
//     seo_title varchar(255) COLLATE utf8mb4_unicode_ci,
//     seo_description text COLLATE utf8mb4_unicode_ci,
//     seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci,
//     seo_slug varchar(255) COLLATE utf8mb4_unicode_ci,
//      call_to_action_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//          call_to_action_description text COLLATE utf8mb4_unicode_ci,
//          call_to_action_button_name varchar(255) COLLATE utf8mb4_unicode_ci,     
//          call_to_action_button_link varchar(255) COLLATE utf8mb4_unicode_ci
//     );

// create table edit_project_sub_sector(edit_project_sector_id int not null auto_increment primary key,
//     alt_tag varchar(255) COLLATE utf8mb4_unicode_ci,
//     banner_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     banner_sub_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     section_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     short_description text COLLATE utf8mb4_unicode_ci,
//    detailed_description text COLLATE utf8mb4_unicode_ci,
//     product_sector_name text COLLATE utf8mb4_unicode_ci,
//     product_sector_select text COLLATE utf8mb4_unicode_ci,
//    product_detailed_description text COLLATE utf8mb4_unicode_ci,
//     project_type1 text COLLATE utf8mb4_unicode_ci,
//    project_type1_title text COLLATE utf8mb4_unicode_ci,
//     project_type1_description text COLLATE utf8mb4_unicode_ci,
//     project_type2 text COLLATE utf8mb4_unicode_ci,
//     project_type2_title text COLLATE utf8mb4_unicode_ci,
//     project_type2_description text COLLATE utf8mb4_unicode_ci,
//   lastest_sub_title text COLLATE utf8mb4_unicode_ci,
//   seo_title varchar(255) COLLATE utf8mb4_unicode_ci,
//    seo_description text COLLATE utf8mb4_unicode_ci,
//    seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci,
//    seo_slug varchar(255) COLLATE utf8mb4_unicode_ci,
//       call_to_action_sub_title text COLLATE utf8mb4_unicode_ci,
//       call_to_action_button_name varchar(255) COLLATE utf8mb4_unicode_ci,     
//       call_to_action_button_link varchar(255) COLLATE utf8mb4_unicode_ci,
//       call_to_action_bar tinyint(1) COLLATE utf8mb4_unicode_ci
//     );


// create table edit_project_sub_sector(edit_project_sector_id int not null auto_increment primary key,
//     alt_tag varchar(255) COLLATE utf8mb4_unicode_ci,
//     banner_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     banner_sub_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     section_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     short_description text COLLATE utf8mb4_unicode_ci,
//    detailed_description text COLLATE utf8mb4_unicode_ci,
//     product_sector_name text COLLATE utf8mb4_unicode_ci,
//     product_sector_select text COLLATE utf8mb4_unicode_ci,
//    product_detailed_description text COLLATE utf8mb4_unicode_ci,
//     project_type1 text COLLATE utf8mb4_unicode_ci,
//    project_type1_title text COLLATE utf8mb4_unicode_ci,
//     project_type1_description text COLLATE utf8mb4_unicode_ci,
//     project_type2 text COLLATE utf8mb4_unicode_ci,
//     project_type2_title text COLLATE utf8mb4_unicode_ci,
//     project_type2_description text COLLATE utf8mb4_unicode_ci,
//   lastest_sub_title text COLLATE utf8mb4_unicode_ci,
//   seo_title varchar(255) COLLATE utf8mb4_unicode_ci,
//    seo_description text COLLATE utf8mb4_unicode_ci,
//    seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci,
//    seo_slug varchar(255) COLLATE utf8mb4_unicode_ci,
//       call_to_action_sub_title text COLLATE utf8mb4_unicode_ci,
//       call_to_action_button_name varchar(255) COLLATE utf8mb4_unicode_ci,     
//       call_to_action_button_link varchar(255) COLLATE utf8mb4_unicode_ci,
//       call_to_action_bar tinyint(1) COLLATE utf8mb4_unicode_ci
//     );
// create table site_details(id int not null auto_increment primary key,
//     site_country varchar(255) COLLATE utf8mb4_unicode_ci not null,
//     site_link varchar(255) COLLATE utf8mb4_unicode_ci not null)

// create table bussiness_news(bussiness_news_id int not null auto_increment primary key,
//     bussiness_news_title varchar(255) COLLATE utf8mb4_unicode_ci,
//   bussiness_news_select_sector varchar(255) COLLATE utf8mb4_unicode_ci,
//   bussiness_news_country varchar(255) COLLATE utf8mb4_unicode_ci,
//   bussiness_news_date text COLLATE utf8mb4_unicode_ci,
//   bussiness_news_alt_tag text COLLATE utf8mb4_unicode_ci,
//   bussiness_news_description text COLLATE utf8mb4_unicode_ci,
//   bussiness_news_project text COLLATE utf8mb4_unicode_ci,
//   bussiness_news_tender text COLLATE utf8mb4_unicode_ci,
//   bussiness_news_companies text COLLATE utf8mb4_unicode_ci,
//   seo_title varchar(255) COLLATE utf8mb4_unicode_ci,
//   seo_description text COLLATE utf8mb4_unicode_ci,
//   seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci,
//   seo_slug varchar(255) COLLATE utf8mb4_unicode_ci);





// create table event(event_id int not null auto_increment primary key,
//     event_name varchar(255) COLLATE utf8mb4_unicode_ci,
//     event_select_sector varchar(255) COLLATE utf8mb4_unicode_ci,
//     event_country varchar(255) COLLATE utf8mb4_unicode_ci,
//     event_date text COLLATE utf8mb4_unicode_ci,
//     event_alt_tag text COLLATE utf8mb4_unicode_ci,
//     event_organiser text COLLATE utf8mb4_unicode_ci,
//     event_venue text COLLATE utf8mb4_unicode_ci,
//     mobile_no text COLLATE utf8mb4_unicode_ci,
//     event_website text COLLATE utf8mb4_unicode_ci,
//     event_email text COLLATE utf8mb4_unicode_ci,
//     event_image text COLLATE utf8mb4_unicode_ci
//     );



// create table about(about_id int not null auto_increment primary key,
//     alt_tag varchar(255) COLLATE utf8mb4_unicode_ci,
//     banner_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     banner_image text COLLATE utf8mb4_unicode_ci,
//     about_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//     about_description text COLLATE utf8mb4_unicode_ci,
//     success_heading text COLLATE utf8mb4_unicode_ci,    
//     success_description text COLLATE utf8mb4_unicode_ci,
//     success_subscriber1 text COLLATE utf8mb4_unicode_ci,
//     success_subscriber2 text COLLATE utf8mb4_unicode_ci,
//     success_year1 text COLLATE utf8mb4_unicode_ci,
//     success_year2 text COLLATE utf8mb4_unicode_ci,
//     success_key_region1 text COLLATE utf8mb4_unicode_ci,
//     success_key_region2 text COLLATE utf8mb4_unicode_ci,
//     who_heading text COLLATE utf8mb4_unicode_ci,
//     who_alt_tag varchar(255) COLLATE utf8mb4_unicode_ci,
//     who_image text COLLATE utf8mb4_unicode_ci,
//     who_description text COLLATE utf8mb4_unicode_ci,
//     mission_heading text COLLATE utf8mb4_unicode_ci,
//     mission_description text COLLATE utf8mb4_unicode_ci,
//     mission_our text COLLATE utf8mb4_unicode_ci,
//     mission_vision text COLLATE utf8mb4_unicode_ci,
//     mission_value text COLLATE utf8mb4_unicode_ci,
//    access_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//    access_description text COLLATE utf8mb4_unicode_ci,
//    access_button varchar(255) COLLATE utf8mb4_unicode_ci,
//    access_link varchar(255) COLLATE utf8mb4_unicode_ci,
//    why_you_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//    why_you_description text COLLATE utf8mb4_unicode_ci,
//    why_you_list text COLLATE utf8mb4_unicode_ci,
//    why_you_alt_tag text COLLATE utf8mb4_unicode_ci,
//    why_you_image text COLLATE utf8mb4_unicode_ci,
//    ourclent_heading varchar(255) COLLATE utf8mb4_unicode_ci,
//    ourclent_description text COLLATE utf8mb4_unicode_ci,
//    ourclent_alt_tag varchar(255) COLLATE utf8mb4_unicode_ci,
//    ourclent_image text COLLATE utf8mb4_unicode_ci,
//    ourclent_check tinyint(1) COLLATE utf8mb4_unicode_ci,
// testo_heading varchar(255) COLLATE utf8mb4_unicode_ci,
// testo_image text COLLATE utf8mb4_unicode_ci,
// testo_alt text COLLATE utf8mb4_unicode_ci,
// testo_descrip text COLLATE utf8mb4_unicode_ci,
// testo_check tinyint(1) COLLATE utf8mb4_unicode_ci,
// testo2_check tinyint(1) COLLATE utf8mb4_unicode_ci,
// testo2_input text COLLATE utf8mb4_unicode_ci,
//       call_to_action_descrip text COLLATE utf8mb4_unicode_ci,
//       call_to_action_button_name varchar(255) COLLATE utf8mb4_unicode_ci,     
//       call_to_action_button_link varchar(255) COLLATE utf8mb4_unicode_ci,
//       call_to_action_bar tinyint(1) COLLATE utf8mb4_unicode_ci,
//       call_to_action_heading text COLLATE utf8mb4_unicode_ci,
//  seo_title varchar(255) COLLATE utf8mb4_unicode_ci,
//    seo_description text COLLATE utf8mb4_unicode_ci,
//    seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci,
//    seo_slug varchar(255) COLLATE utf8mb4_unicode_ci
//    );


// create table contact(contact_id int not null auto_increment primary key,
//     heading varchar(255) COLLATE utf8mb4_unicode_ci,
//  sub_heading varchar(255) COLLATE utf8mb4_unicode_ci,
// map_location text COLLATE utf8mb4_unicode_ci,
// our_address text COLLATE utf8mb4_unicode_ci,
// get_in_touch text COLLATE utf8mb4_unicode_ci,
//       call_to_action_descrip text COLLATE utf8mb4_unicode_ci,
//       call_to_action_button_name varchar(255) COLLATE utf8mb4_unicode_ci,     
//       call_to_action_button_link varchar(255) COLLATE utf8mb4_unicode_ci,
//       call_to_action_bar tinyint(1) COLLATE utf8mb4_unicode_ci,
//       call_to_action_heading text COLLATE utf8mb4_unicode_ci,
//  seo_title varchar(255) COLLATE utf8mb4_unicode_ci,
//    seo_description text COLLATE utf8mb4_unicode_ci,
//    seo_keyword varchar(255) COLLATE utf8mb4_unicode_ci,
//    seo_slug varchar(255) COLLATE utf8mb4_unicode_ci,
// site_id text COLLATE utf8mb4_unicode_ci,
// sot_delete tinyint(1),
// publish tinyint(1)
//    );