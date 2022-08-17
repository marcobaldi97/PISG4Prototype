class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.string :ci
      t.string :firstName
      t.string :lastName

      t.timestamps
    end
  end
end
