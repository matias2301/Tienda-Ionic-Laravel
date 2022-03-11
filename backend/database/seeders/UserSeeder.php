<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminUser  = User::where('email', 'admin@admin.com')->first();
    	if( $adminUser ){
    		$adminUser->delete();
        }
        
        User::create([
            "name"      => "administrador",
            "email"     => "admin@admin.com",
            "password"  => bcrypt("admin1234"),
            "role"      => "admin"
        ]);
    }
}
