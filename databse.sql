//SGL file for creating database
CREATE TABLE "gallery"(
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(500),
"description" VARCHAR(240),
"likes" INTEGER
);

INSERT INTO "gallery"("path", "description", "likes")
VALUES('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0);

