class TeachersController < ApplicationController
  def index
    teachers = Teacher.all.includes(:subjects)
    
    result = teachers.map do |teacher|
      {firstName: teacher.firstName, lastName: teacher.lastName, ci: teacher.ci, subjects: teacher.subjects.pluck(:name)}
    end

    render json: result
  end

  def create
    subjects = params[:subjects]

    teacher = Teacher.new(ci: params[:ci], firstName: params[:firstName], lastName: params[:lastName])

    subjects.each do |subject|
      teacher.subjects << Subject.find_or_create_by(name: subject)
    end
    
    teacher.save!

    render json: teacher

  rescue ActiveRecord::RecordNotFound
    render json: "Not found, mate", status: :not_found 
  end
end