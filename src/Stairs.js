import Entity from './Entity.js'
import Spawner from './Spawner.js';

class Stairs extends Entity {
    attributes = {name: 'Stairs', color: 'black', ascii: '>', offsett: {x:2,y:13}}

    action (verb,world){
        if(verb==='bump'){
            world.addToHistory('You move down stairs...');
            world.createCellularMap();
            world.player.x=0;
            world.player.y=0;
            world.moveToSpace(world.player);
            world.entities = world.entities.filter(e => e === world.player);
            let spawner = new Spawner(world);
            spawner.spwanLoot(10);
            spawner.spwanMonsters(6);
            spawner.spawnStairs();
        }
    }

}

export default Stairs