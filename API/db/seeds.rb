# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Teacher.destroy_all
Subject.destroy_all

teacher1 = Teacher.create(ci: "1.685.142-7", firstName: "Marco", lastName: "Baldi")
teacher2 = Teacher.create(ci: "1.695.142-7", firstName: "Nick", lastName: "Blumetto")
teacher3 = Teacher.create(ci: "5.013.775-8", firstName: "Nacho", lastName: "Carmona")

teacher1.subjects << Subject.create(name: "IT");
teacher2.subjects << Subject.where(name: "IT");
teacher3.subjects << Subject.where(name: "IT");
teacher3.subjects << Subject.create(name: "Math");