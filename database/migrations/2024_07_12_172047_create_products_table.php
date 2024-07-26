<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('price');
            $table->integer('newPrice')->nullable();
            $table->string('picture');
            $table->integer('count')->default(0);
            $table->float('rating')->default(0);
            $table->enum('available', ['Есть в наличии', 'Нет в наличии']);
            $table->enum('developer', ['Adobe', 'Microsoft', 'Autodesk'])->nullable();
            $table->enum('edition', ['Home', 'Pro', 'Enterprise'])->nullable();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
