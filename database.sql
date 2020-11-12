-- CREATE DATABASE hotel;

CREATE TABLE rooms(
    room_id SERIAL PRIMARY KEY, 
    room_number INT UNIQUE NOT NULL,
    price MONEY NOT NULL,
    max_occupancy INT NOT NULL
);

CREATE TABLE reservations(
    reservation_id SERIAL PRIMARY KEY, 
    room_number INT REFERENCES rooms (room_number) NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL
);
