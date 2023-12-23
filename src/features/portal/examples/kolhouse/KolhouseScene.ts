import mapJson from "assets/map/kolhouse.json";
import { SceneId } from "features/world/mmoMachine";
import { BaseScene } from "features/world/scenes/BaseScene";

export class KolhouseScene extends BaseScene {
  sceneId: SceneId = "kolhouse";

  constructor() {
    super({
      name: "kolhouse",
      map: { json: mapJson },
      audio: { fx: { walk_key: "dirt_footstep" } },
    });
  }

  async create() {
    this.map = this.make.tilemap({
      key: "kolhouse",
    });

    super.create();

    this.physics.world.drawDebug = true;
  }
}
