class TeachersController < ApplicationController
    def index
        @teachers = Teacher.all

        render json: @teachers
    end
    
    def create
        @teacher = Teacher.create(ci: params[:ci],firstName: params[:firstName],lastName: params[:lastName])
        
        subjects = params[:subjects]

        subjects.each do |subjectName|
            puts subjectName
            @teacher = @teacher.subjects.create(name: "IT")
        end
        
        render json: @teacher
    end
end
