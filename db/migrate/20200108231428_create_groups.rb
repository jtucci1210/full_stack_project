class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.string :description, null: false 
      t.boolean :private, null: false, default: false
      t.timestamps
    end

    add_index :groups, :title, unique: true
  end
end
