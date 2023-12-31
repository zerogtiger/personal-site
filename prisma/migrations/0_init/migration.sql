-- CreateTable
CREATE TABLE "cameras" (
    "id" SERIAL NOT NULL,
    "make" VARCHAR(255),
    "model" VARCHAR(255),

    CONSTRAINT "cameras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lenses" (
    "id" SERIAL NOT NULL,
    "make" VARCHAR(255),
    "model" VARCHAR(255),

    CONSTRAINT "lenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "city" VARCHAR(255),
    "state" VARCHAR(255),
    "country" VARCHAR(255),
    "longitude" DECIMAL(10,1),
    "latitude" DECIMAL(10,1),

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" SERIAL NOT NULL,
    "file_location" VARCHAR(255),
    "date" DATE,
    "time" TIME(6),
    "aperature" DECIMAL(10,2),
    "shutter_speed" VARCHAR(255),
    "iso" INTEGER,
    "location_id" INTEGER,
    "camera_id" INTEGER,
    "lens_id" INTEGER,
    "description" TEXT,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "camera_id" FOREIGN KEY ("camera_id") REFERENCES "cameras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "lens_id" FOREIGN KEY ("lens_id") REFERENCES "lenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "location_id" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

