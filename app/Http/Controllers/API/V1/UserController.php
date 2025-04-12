<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $users = [
            ['id' => 1, 'name' => 'Nguyễn Văn A', 'email' => 'a@example.com'],
            ['id' => 2, 'name' => 'Trần Thị B', 'email' => 'b@example.com'],
            ['id' => 3, 'name' => 'Lê Văn C', 'email' => 'c@example.com'],
        ];

        return response()->json($users);
    }
}
