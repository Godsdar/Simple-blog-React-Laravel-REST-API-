<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('posts')->insert([
            [
                'title' => 'Getting Started with Laravel',
                'body' => 'Laravel is a powerful PHP framework that makes building web applications a breeze. With its elegant syntax and rich ecosystem, you can quickly build anything from simple blogs to complex enterprise applications.',
                'created_at' => '2024-10-12 00:00:00',
                'updated_at' => '2024-10-12 00:00:00',
            ],
            [
                'title' => 'React Tips and Tricks',
                'body' => 'React has changed the way we build user interfaces. In this post, we will explore some advanced patterns like custom hooks, render props, and compound components that will level up your React skills.',
                'created_at' => '2024-10-15 00:00:00',
                'updated_at' => '2024-10-15 00:00:00',
            ],
            [
                'title' => 'Understanding Tailwind CSS',
                'body' => 'Tailwind CSS is a utility-first CSS framework that allows you to build beautiful designs without leaving your HTML. Learn how to use its powerful classes to create responsive and modern layouts.',
                'created_at' => '2024-10-18 00:00:00',
                'updated_at' => '2024-10-18 00:00:00',
            ],
        ]);
    }
}
