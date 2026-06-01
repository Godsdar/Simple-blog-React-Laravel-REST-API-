<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("posts")->insert([
            [
                "title" => "the first post",
                "content" => "Sometimes the same things are different",
                "created_at" => "2024-10-12 00:00:00",
                "updated_at" => "2025-10-10 00:00:00",
            ],
        ]);
    }
}
