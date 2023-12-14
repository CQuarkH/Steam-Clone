package com.example.sp_shopping_cart.models.product;

public enum ProductCategory {
    ACTION {
        @Override
        public String toString() {
            return "Action";
        }
    },

    ADVENTURE {
        @Override
        public String toString() {
            return "Adventure";
        }

    },
    CASUAL {
        @Override
        public String toString() {
            return "Casual";
        }

    },
    INDIE {
        @Override
        public String toString() {
            return "Indie";
        }

    },
    MMO {
        @Override
        public String toString() {
            return "Massively Multiplayer (MMO)";
        }
    },
    RPG {
        @Override
        public String toString() {
            return "RPG (Role-Playing Game)";
        }

    },
    SIMULATION {
        @Override
        public String toString() {
            return "Simulation";
        }

    },
    STRATEGY {
        @Override
        public String toString() {
            return "Strategy";
        }
    },
    SPORTS {
        @Override
        public String toString() {
            return "Sports";
        }
    },
    RACING {
        @Override
        public String toString() {
            return "Racing";
        }
    },
    EARLY_ACCESS {
        @Override
        public String toString() {
            return "Early Access";
        }
    },
    VR {
        @Override
        public String toString() {
            return "Virtual Reality (VR)";
        }
    },
    SINGLE_PLAYER {
        @Override
        public String toString() {
            return "Singleplayer";
        }

    },
    MULTIPLAYER {
        @Override
        public String toString() {
            return "Multiplayer";
        }

    },
    CO_OP {
        @Override
        public String toString() {
            return "Co-op";
        }
    },
    DLC {
        @Override
        public String toString() {
            return "DLC";
        }
    },
    SOFTWARE {
        @Override
        public String toString() {
            return "Software";
        }
    },
    VIDEOS {
        @Override
        public String toString() {
            return "Videos";
        }
    },
    FULL_CONTROLLER_SUPPORT {
        @Override
        public String toString() {
            return "Full Controller Support";
        }
    };

}
