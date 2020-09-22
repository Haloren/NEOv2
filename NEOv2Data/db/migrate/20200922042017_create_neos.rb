class CreateNeos < ActiveRecord::Migration[6.0]
  def change
    create_table :neos do |t|
      t.string :name
      t.datetime :date
      t.integer :minsize
      t.integer :maxsize
      t.float :lunar
      t.integer :km

      t.timestamps
    end
  end
end
