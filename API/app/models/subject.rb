class Subject < ApplicationRecord
    has_and_belongs_to_many :teachers
    validates :name, uniqueness: true
end
