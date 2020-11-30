# Sheep Dog Game

Inspired by an aerial view of a snippet of how sheepdogs manage to get a herd of sheeps into their pen, I've decided to create a game to simulate that fascinating experience.

Demo: https://aw18.github.io/SheepDogGame/

## Characters

- Sheep dogs
- Sheeps
- Foxes / Wolves
- Cliff
- Farmer

## Releases

Release Version | Updates
1.0 (Work in progress) | Implement Boids for sheep movement

## Notes

### Implementing boids for sheep movement

- Based off of Craig Reymolds's 1986 study on different kinds of flocking animal behaviours (http://www.red3d.com/cwr/boids/). A boid is the generic flocking creature. The basic flocking model consists of 3 simple steering behaviours that describes how a boid maneuvers based on the positions and velocities of its nearby flockmates.

1. Separation - avoid crowding local flockmates
2. Alignment - point towards the average heading of local flockmates
3. Cohesion - steer to move toward the average position of local flockmates

- This youtube video describes this behaviour well: https://www.youtube.com/watch?v=QbUPfMXXQIY
