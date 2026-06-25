<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'password' => Hash::make('password'),
                'created_at' => '2024-10-01 00:00:00',
                'updated_at' => '2024-10-01 00:00:00',
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane@example.com',
                'password' => Hash::make('password'),
                'created_at' => '2024-10-02 00:00:00',
                'updated_at' => '2024-10-02 00:00:00',
            ],
            [
                'name' => 'Alice Johnson',
                'email' => 'alice@example.com',
                'password' => Hash::make('password'),
                'created_at' => '2024-10-03 00:00:00',
                'updated_at' => '2024-10-03 00:00:00',
            ],
            [
                'name' => 'Bob Williams',
                'email' => 'bob@example.com',
                'password' => Hash::make('password'),
                'created_at' => '2024-10-04 00:00:00',
                'updated_at' => '2024-10-04 00:00:00',
            ],
        ]);
    }
}
