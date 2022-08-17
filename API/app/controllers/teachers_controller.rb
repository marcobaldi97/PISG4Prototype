class TeachersController < ApplicationController
    def index
        @teachers = Teacher.all

        render json: @teachers
    end
    
    def create
        @teachers = Teacher.create(ci: params[:ci],firstName: params[:firstName],lastName: params[:lastName], )
        
        render json: @teachers
    end
end
