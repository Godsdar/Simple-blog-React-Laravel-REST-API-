<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('comments')->insert([
            [
                'content' => 'Great introduction to Laravel! I especially liked the section on Eloquent ORM.',
                'post_id' => 1,
                'user_id' => 2,
                'created_at' => '2024-10-13 10:00:00',
                'updated_at' => '2024-10-13 10:00:00',
            ],
            [
                'content' => 'I have been using Laravel for years and it never disappoints. Highly recommend!',
                'post_id' => 1,
                'user_id' => 3,
                'created_at' => '2024-10-14 12:00:00',
                'updated_at' => '2024-10-14 12:00:00',
            ],
            [
                'content' => 'Could you write more about Laravel queues? That would be awesome.',
                'post_id' => 1,
                'user_id' => 4,
                'created_at' => '2024-10-14 15:00:00',
                'updated_at' => '2024-10-14 15:00:00',
            ],
            [
                'content' => 'Custom hooks are a game changer. Thanks for the clear examples!',
                'post_id' => 2,
                'user_id' => 1,
                'created_at' => '2024-10-16 09:00:00',
                'updated_at' => '2024-10-16 09:00:00',
            ],
            [
                'content' => 'I switched from CSS modules to Tailwind and never looked back. Great post!',
                'post_id' => 3,
                'user_id' => 2,
                'created_at' => '2024-10-19 11:00:00',
                'updated_at' => '2024-10-19 11:00:00',
            ],
            [
                'content' => 'Tailwind is so clean once you get the hang of it. Nice overview!',
                'post_id' => 3,
                'user_id' => 4,
                'created_at' => '2024-10-20 08:00:00',
                'updated_at' => '2024-10-20 08:00:00',
            ],
        ]);
    }
}
