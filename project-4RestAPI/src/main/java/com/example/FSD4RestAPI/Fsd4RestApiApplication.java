package com.example.FSD4RestAPI;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Fsd4RestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(Fsd4RestApiApplication.class, args);
	}
	
	 @Bean
	    public CommandLineRunner commandLineRunner(QuestionRepository questionRepository) {
	        return args -> {
	            Question question1 = new Question();
	            question1.setQuestionText("What is the largest animal in planet?");
	            question1.setCorrectAnswer("Blue Whale");
	            questionRepository.save(question1);

	            Question question2 = new Question();
	            question2.setQuestionText("What is HTML?");
	            question2.setCorrectAnswer("Hypertext markup language");
	            questionRepository.save(question2);
	            
	            Question question3 = new Question();
	            question3.setQuestionText("What is CSS?");
	            question3.setCorrectAnswer("Cascading Style Sheet");
	            questionRepository.save(question3);
	            
	            Question question4 = new Question();
	            question4.setQuestionText("What is FSJD?");
	            question4.setCorrectAnswer("Full stack java developer");
	            questionRepository.save(question4);
	            
	            Question question5 = new Question();
	            question5.setQuestionText("Give feature of abstract class?");
	            question5.setCorrectAnswer("An abstract class cannot be instantiated,contain abstact methods and accessors");
	            questionRepository.save(question5);
	            
	            Question question6 = new Question();
	            question6.setQuestionText("Who inveted AngularJS?");
	            question6.setCorrectAnswer("Misko Hevery");
	            questionRepository.save(question6);
	            
	            Question question7 = new Question();
	            question7.setQuestionText("Which year was AngularJS invented?");
	            question7.setCorrectAnswer("2009");
	            questionRepository.save(question7);
	            
	            // Add more sample questions as needed
	        };
	    }

}
