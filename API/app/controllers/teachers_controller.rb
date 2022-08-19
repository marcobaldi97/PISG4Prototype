class TeachersController < ApplicationController
  def index
    @teachers = Teacher.all

    render json: @teachers
  end

  def create
    subjects = params[:subjects]
    subjectArray = []

    subjects.each do |subjectName|
      puts subjectName
      subjectArray = subjectArray.push(Subject.create(name: subjectName))
    end

    @teacher = Teacher.create(ci: params[:ci], firstName: params[:firstName], lastName: params[:lastName],
                              subjects: subjectArray)

    render json: @teacher
  end
end
