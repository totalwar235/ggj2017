var GAME_LEVELS = [
 [
"                                                                          xxxxxxx      ",
"                                                                          x     x      ",
"                                                                          x     x      ",
"                                                                         sx     x      ",
"                                                                          x     x      ",
"                                                                          x     x      ",
"                                                                          x     xxxx   ",
"                                                                          x     x  x   ",
"                                                                          x     x  x   ",
"                       #xHxHxxHxxxxx                                      x     x  x   ",
"                       #                                       #xxxwwwxHxHxxxxxxx  x   ",
"                       #                                       #  x   x   xs x  x  x   ",
"                       #                                       #  x   x   x  x  x  x   ",
"                       #                                       #  x   x_  x_ x  x  x   ",
"                       #                                       #  x          hxxx  x   ",
"                       #                                       # _x     _  _ x  x  x   ",
"                       #                                       xx x          x  x  x   ",
"                       #                                       s  x    _   _ x  h  x   ",
"                       #__                                       _x          x  x  x   ",
"                                                                  x          x  x  x   ",
"                          __                                     _xxxxxxxxxxxxx x  x   ",
"                                                                  x      x  h h x  x   ",
"                            __                                    x      h  x x x  x   ",
"                                     xxxxxHxHxxHxxx    xwwxxxxxxxxx xxxxxx  h h x  x   ",
"                              xxxxx#   x          x    x  h      s  x    x  xxx x  x   ",
"                                   #   x          x    x  x         x    x      h  x   ",
"                                   #   x          x    x  h         x  __h      x  x   ",
"                                   #   x         sx    x  x         x    x      x  x   ",
"                                   # xxxx#xxx  xx x    x  xxwwxxxxxxx__  xxxxxxxx  x   ",
"                                   #   x #      x x    x      x          x      x  x   ",
"                       #xxxH  xxxHxx   x #      x x    x      x        __x      x  x   ",
"                       #               x #      x x    xxxxxxxx          x      x  x   ",
"                       #               x #      x x         x x          x      x  x   ",
"                       #               x #      x x         x x          x      x  x   ",
"                       #               x #      x x         x x          x      x  x   ",
"                       #               x #      xxx         x x          x      x  x   ",
"                       #               x #                  xxxxx#xxxxx#xx      x  x   ",
"                       #               xxx                       #     #        x  x   ",
"                       xxx    xxh   x  x h                       #     #        x  x   ",
"                                    x  x x                       #     #        x  x   ",
"                                    x  x xxx                     #     #        x  x   ",
"                                  __x  x x h                     #     #        x  x   ",
"                                    x  x x xxx                   #     #        x  x   ",
"                                    x  x x x x                   # xxxx#xxHxxxxxx  x   ",
"                          xxHx  #xxxx  x x x h  x                # x   #     x     x   ",
"                                #      x x x x  x                # x   #  x  x     x   ",
"                                #      xHxxxxxx#xxx  xxxx   xxxx # x   # _x_ x  xwwx   ",
"                                #              #                 # x   #  x  xs xwwx   ",
"                                #              #                 # x  xxxxxxxxxxxxxx   ",
"                                #              #                 # x_              x   ",
"xxxxxwwwwx#             x#xxxxxxx              #                 # x               x   ",
"    xwwwwx#              #                     #                 # x               x   ",
"    xwwwwx#              #                     #                 # x               x   ",
"    xwwwwx#              #                  hxx#                 # xxxxxxx#  xxxx  x   ",
"    xwwwwx#              #                    s#                 #        #        x   ",
"    xwwwwx#              #           xx  xx    #                 #        #        x   ",
"    xwwwwx#              #                     #                 #        #        x   ",
"    xwwwwx#             x#xxxxx     #          #                 #        #        x   ",
"    xwwwwx#              #          #          #                 #        xxx#xwwxxx   ",
"xxxxxwwwwx#       xxx    #          #          #                 #           #xw_x x   ",
"wwwwwwwwwx#       xoo    #          #       xxxxxx               #           #xwwx x   ",
"wwwwwwwwwx#       x  s   #          #                            #           #xwwx x   ",
"wwwwwwwwwx#   @   xxxx   #          #                            #           #xw_x x   ",
"xxxxxxxxxxxxxxxxx        #          #                            #           #xwwx x   ",
"           x x xx        #          #                            #           #xwwx x   ",
"           x x xx        #          #                            #           #xw_x x   ",
"           x x xx        #          #                            #           #xwwx x   ",
"           xoo xx        #          #                            #           #xwwx x   ",
"           xoo xxxxxxxxxxx   xxxxxxxxxxxxxxwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ",
"           xxx#x         x   x         x #xwwwx          x                         x   ",
"             x#x         x   x         x #xwwwx          x                         x   ",
"       xxxx  x#x         x   x         x #xwwwx          x                         x   ",
"       x  x  x#x         x   x         x #xwwwx          x                         x   ",
"       x  x  x#x         x   x         x #xwwwx          x                         x   ",
"   xxxxx  xxxx#x         xwwwx         x #xwwwx          x                         x   ",
"              #x  xxxxxxxxxxxx         x #xwwwx          x                         x   ",
"              #h  x xx  x              x #xwwwx          x                         x   ",
"              #x  x     x              x #xwwwx  x     x#x                         x   ",
"              #x  x     x              x #pwwwwwwx     x#xxx                       x   ",
"   xxxxx  xxx #x  x#x  xx              x #pwwwwwwx     x#x     xxx                 x   ",
"   xxxxx  xxx #h  x#    x              x #pwwwwwwx     x#x                         x   ",
"   xxxxx  xxx #xxxx#    x    xxxxxxxxxxxxxxxHxxxxxxxxxxx#x         xxHxx           x   ",
"              #    #    x    x         x  x      x      #x                       # x   ",
"              #    #    x    x         x  x      x      #x                       # x   ",
"              #  #xx  x x    x         x  x      x      #x                       # x   ",
"              #  #      x    x                          #x                 xxxx  # x   ",
"              #  #      x    x                          #x                       # x   ",
"   wwwwwwwwwww#wwwwwwwwwx    x                          #x                       # x   ",
"   wwxxxxxxxxxxxxxxxxxxxx    x         xxHx    xxxHxHxHxxx                       # x   ",
"   ww                        x ___                                               # h   ",
"   ww                        x                                                   # x   ",
"  x  xxxxxxxxxxxx            x                                                   # x   ",
"  x             x            x                                                 __# x   ",
"  x             x            x                                                   # x   ",
"  x__           x            x       ___                                         # x   ",
"  x             x            x            ___                                    # x   ",
"  x             x            x                                #xxxx     xxxx     # xx  ",
"  x             x            x                ___             #                  # xxxx",
"  x__           x            x                                #                  # x  x",
"  x             x            x  x   x          x              #                  # x  x",
"  x             x            x  x   x          x              #                  # x  x",
"  xxxxHxxxHx  xxx            x  x   x          x              #                  # x  x",
"  x             x            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"  x             x                                                                      ",
"  x             x                                                                      ",
"  x             h                                                                      ",
"  xxxxxx  xxxxxxx                                                                      ",
"   x xf      FFFx                                                                      ",
"   x xf         x                                                                      ",
"   x xf         x                                                                      ",
"   x xf         x                                                                      ",
"   x xxxxxxxx   xxxxx                                                                  ",
"   x xFFF          fx                                                                  ",
"   x x             fx                                                                  ",
"   x x             fx                                                                  ",
"   x x             fx                                                                  ",
"   x x   xxxxxxxxxxxx                                                                  ",
"   x            x                                                                      ",
"   x            x                                                                      ",
"   x            h                                                                      ",
"   x            x                                                                      ",
"   xxxxxxxx xxxxx                                                                      ",
"          x x                                                                          ",
"          x x                                                                          ",
"          x x                                                                          ",
"          x x                                                                          ",
"   xxxxxxxx xxx   xxx                                                                  ",
"   f      x x       x                                                                  ",
"   f      x x       x                                                                  ",
"   x x    x x       x                                                                  ",
"   x x      x       x                                                                  ",
"   x x      x  !!!  x                                                                  ",
"   x x      x       x                                                                  ",
"   x x     Fx       x                                                                  ",
"   x x x x xx       x                                                                  ",
"   x x      x       x                                                                  ",
"   x x      x       x                                                                  ",
"   x x      x!!!    x                                                                  ",
"   x x      x       x                                                                  ",
"   x x      x       x                                                                  ",
"   x x      x       x                                                                  ",
"   x x      x   !!! x                                                                  ",
"   x x      x       x                                                                  ",
"   x x    xxx       x                                                                  ",
"   x x    s x       x                                                                  ",
"   x x      x       x                                                                  ",
"   x x      x!!!    x                                                                  ",
"   x x x    x       x                                                                  ",
"   x x x    x       x                                                                  ",
"   x x x    x    !!!x                                                                  ",
"   x xxxx   x       x                                                                  ",
"   x x  x   x       x                                                                  ",
"   x x  x           x                                                                  ",
"   x x  x           x                                                                  ",
"   x x  x     !!!   x                                                                  ",
"   x x  x __        x                                                                  ",
"   x x  x           x                                                                  ",
"   x x  x           x                                                                  ",
"   x x  x           x                                                                  ",
"   x x  x           x                                                                  ",
"   xFxwwxwwwwwwwwwwwx                                                                  ",
"   xxxxxxxxxxxxxxxxxx                                                                  ",
]
];
if (typeof module != "undefined" && module.exports)module.exports = GAME_LEVELS;