$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/functionalTests/End2End.feature");
formatter.feature({
  "name": "Tests",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User generate token for authorization",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_am_an_authorized_user()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the Authorized user can Add and Remove a book",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A list of books are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.a_list_of_books_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a book to my reading list",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_add_a_book_to_my_reading_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The book is added",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.the_Book_Is_Added()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove a book from my reading list",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_remove_a_book_from_my_reading_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The book is removed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.the_book_is_removed()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.Steps.the_book_is_removed(Steps.java:102)\r\n\tat ✽.The book is removed(file:///C:/Users/e5630788/Desktop/SampleClient/SampleCucumber/src/test/resources/functionalTests/End2End.feature:11)\r\n",
  "status": "failed"
});
});