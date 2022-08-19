class CreateTeachersSubjectsJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_join_table :teachers, :subjects
  end
end
