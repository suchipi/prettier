ig.module(
  "game.entities.player"
)
.requires(
  "impact.entity",
  "impact.animation"
)
.defines(function() {
  PlayerEntity = {};
});

ig.module(
  // before
  "game.entities.player"
  // after
)
.requires(
  // before
  "impact.entity",
  // between
  "impact.animation"
  // after
)
.defines(function() {
  PlayerEntity = {};
});

ig.module(
  "game.entities.player"
)
.requires(
  "impact.entity",
  "impact.animation"
)
.defines(() => {

  PlayerEntity = {};

});

ig.module(
	'impact.image'
)
.defines(function(){ "use strict";
  ig.Image = {};

});

ig.module(
	'impact.image'
)
.defines(() => { "use strict";

  ig.Image = {};
});
