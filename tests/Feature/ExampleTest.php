<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_get(): void
    {
        $response = $this->get('/api');

        $response->assertStatus(200);
    }

    public function test_bad_payload_post(): void
    {
        $payload = array (
            array(
            'Year' => 2003,
            'imdbID' => "tt0234215",
            'Poster' => "N\/A",
            ),
            array(
                'Title' => "The Matrix",
                'Year' => 1999,
                'imdbID' => "tt0133093",
                'Type' => "game",
                'Poster' => "https:\/\/m.media-amazon.com\/images\/M\/MV5BNDQzM2FhZmQtMzRjOC00ZDU0LWJjY2YtMWU2NTdhZGNiZTYwXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg",
            )
          );
          
        $response = $this->post('/api/post', $payload);
        $response->assertStatus(500);
    }

    public function test_post(): void
    {
        $payload = array (
            array(
            'Title' => "The Matrix Reloaded",
            'Year' => 2003,
            'imdbID' => "tt0234215",
            'Type' => "movie",
            'Poster' => "N\/A",
            ),
            array(
                'Title' => "The Matrix",
                'Year' => 1999,
                'imdbID' => "tt0133093",
                'Type' => "game",
                'Poster' => "https:\/\/m.media-amazon.com\/images\/M\/MV5BNDQzM2FhZmQtMzRjOC00ZDU0LWJjY2YtMWU2NTdhZGNiZTYwXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg",
            )
          );
          
        $response = $this->post('/api/post', $payload);
        $response->assertStatus(200);
    }
}
