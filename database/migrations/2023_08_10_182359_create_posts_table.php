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
        Schema::create('movies', function (Blueprint $table) {
            $table->string('Title');
            $table->integer('Year');
            $table->string('imdbID');
            $table->unique('imdbID');
            $table->string('Type');
        });

        Schema::create('posters', function (Blueprint $table) {
            $table->increments('id');
            $table->string('imdbID');
            $table->foreign('imdbID')->references('imdbID')->on('movies')->onUpdate('cascade')->onDelete('cascade');
            $table->string('Poster');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posters');
        Schema::dropIfExists('movies');
    }
};
