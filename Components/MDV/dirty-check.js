/*
 * Copyright 2012 The Toolkitchen Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
(function() {
  check = function() {
    Model.dirtyCheck();
  };
  window.addEventListener('WebComponentsReady', function() {
    // timeout keeps the profile clean
    setTimeout(function() {
      //console.profile('initial model dirty check');
      check();
      //console.profileEnd();
    }, 0);
    setInterval(check, 125);
  });
})();