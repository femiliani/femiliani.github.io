(function () {
  "use strict";

  var cases = [];
  var current = 0;
  var orderedStains = {};
  var stainSuggesterOn = false;
  var pendingAnswer = "";
  var progressKey = "pathunknowns-progress-v1";
  var progress = {};
  var activeFilter = "all";
  var caseIndex = [{"id":"w819c3","title":"Week 819: Case 3","case_label":"Week 819: Case 3","chunk":0,"position":0},{"id":"w819c2","title":"Week 819: Case 2","case_label":"Week 819: Case 2","chunk":0,"position":1},{"id":"w819c1","title":"Week 819: Case 1","case_label":"Week 819: Case 1","chunk":0,"position":2},{"id":"w818c3","title":"Week 818: Case 3","case_label":"Week 818: Case 3","chunk":0,"position":3},{"id":"w818c2","title":"Week 818: Case 2","case_label":"Week 818: Case 2","chunk":0,"position":4},{"id":"w818c1","title":"Week 818: Case 1","case_label":"Week 818: Case 1","chunk":0,"position":5},{"id":"w817c3","title":"Week 817: Case 3","case_label":"Week 817: Case 3","chunk":0,"position":6},{"id":"w817c2","title":"Week 817: Case 2","case_label":"Week 817: Case 2","chunk":0,"position":7},{"id":"w817c1","title":"Week 817: Case 1","case_label":"Week 817: Case 1","chunk":0,"position":8},{"id":"w816c3","title":"Week 816: Case 3","case_label":"Week 816: Case 3","chunk":0,"position":9},{"id":"w816c2","title":"Week 816: Case 2","case_label":"Week 816: Case 2","chunk":1,"position":0},{"id":"w816c1","title":"Week 816: Case 1","case_label":"Week 816: Case 1","chunk":1,"position":1},{"id":"w815c3","title":"Week 815: Case 3","case_label":"Week 815: Case 3","chunk":1,"position":2},{"id":"w815c2","title":"Week 815: Case 2","case_label":"Week 815: Case 2","chunk":1,"position":3},{"id":"w815c1","title":"Week 815: Case 1","case_label":"Week 815: Case 1","chunk":1,"position":4},{"id":"w814c3","title":"Week 814: Case 3","case_label":"Week 814: Case 3","chunk":1,"position":5},{"id":"w814c2","title":"Week 814: Case 2","case_label":"Week 814: Case 2","chunk":1,"position":6},{"id":"w814c1","title":"Week 814: Case 1","case_label":"Week 814: Case 1","chunk":1,"position":7},{"id":"w813c3","title":"Week 813: Case 3","case_label":"Week 813: Case 3","chunk":1,"position":8},{"id":"w813c2","title":"Week 813: Case 2","case_label":"Week 813: Case 2","chunk":1,"position":9},{"id":"w813c1","title":"Week 813: Case 1","case_label":"Week 813: Case 1","chunk":2,"position":0},{"id":"w812c3","title":"Week 812: Case 3","case_label":"Week 812: Case 3","chunk":2,"position":1},{"id":"w812c2","title":"Week 812: Case 2","case_label":"Week 812: Case 2","chunk":2,"position":2},{"id":"w812c1","title":"Week 812: Case 1","case_label":"Week 812: Case 1","chunk":2,"position":3},{"id":"w811c3","title":"Week 811: Case 3","case_label":"Week 811: Case 3","chunk":2,"position":4},{"id":"w811c2","title":"Week 811: Case 2","case_label":"Week 811: Case 2","chunk":2,"position":5},{"id":"w811c1","title":"Week 811: Case 1","case_label":"Week 811: Case 1","chunk":2,"position":6},{"id":"w810c3","title":"Week 810: Case 3","case_label":"Week 810: Case 3","chunk":2,"position":7},{"id":"w810c2","title":"Week 810: Case 2","case_label":"Week 810: Case 2","chunk":2,"position":8},{"id":"w810c1","title":"Week 810: Case 1","case_label":"Week 810: Case 1","chunk":2,"position":9},{"id":"w809c3","title":"Week 809: Case 3","case_label":"Week 809: Case 3","chunk":3,"position":0},{"id":"w809c2","title":"Week 809: Case 2","case_label":"Week 809: Case 2","chunk":3,"position":1},{"id":"w809c1","title":"Week 809: Case 1","case_label":"Week 809: Case 1","chunk":3,"position":2},{"id":"w808c3","title":"Week 808: Case 3","case_label":"Week 808: Case 3","chunk":3,"position":3},{"id":"w808c2","title":"Week 808: Case 2","case_label":"Week 808: Case 2","chunk":3,"position":4},{"id":"w808c1","title":"Week 808: Case 1","case_label":"Week 808: Case 1","chunk":3,"position":5},{"id":"w807c3","title":"Week 807: Case 3","case_label":"Week 807: Case 3","chunk":3,"position":6},{"id":"w807c2","title":"Week 807: Case 2","case_label":"Week 807: Case 2","chunk":3,"position":7},{"id":"w807c1","title":"Week 807: Case 1","case_label":"Week 807: Case 1","chunk":3,"position":8},{"id":"w806c3","title":"Week 806: Case 3","case_label":"Week 806: Case 3","chunk":3,"position":9},{"id":"w806c2","title":"Week 806: Case 2","case_label":"Week 806: Case 2","chunk":4,"position":0},{"id":"w806c1","title":"Week 806: Case 1","case_label":"Week 806: Case 1","chunk":4,"position":1},{"id":"w805c3","title":"Week 805: Case 3","case_label":"Week 805: Case 3","chunk":4,"position":2},{"id":"w805c2","title":"Week 805: Case 2","case_label":"Week 805: Case 2","chunk":4,"position":3},{"id":"w805c1","title":"Week 805: Case 1","case_label":"Week 805: Case 1","chunk":4,"position":4},{"id":"w804c3","title":"Week 804: Case 3","case_label":"Week 804: Case 3","chunk":4,"position":5},{"id":"w804c2","title":"Week 804: Case 2","case_label":"Week 804: Case 2","chunk":4,"position":6},{"id":"w804c1","title":"Week 804: Case 1","case_label":"Week 804: Case 1","chunk":4,"position":7},{"id":"w803c3","title":"Week 803: Case 3","case_label":"Week 803: Case 3","chunk":4,"position":8},{"id":"w803c2","title":"Week 803: Case 2","case_label":"Week 803: Case 2","chunk":4,"position":9},{"id":"w803c1","title":"Week 803: Case 1","case_label":"Week 803: Case 1","chunk":5,"position":0},{"id":"w802c3","title":"Week 802: Case 3","case_label":"Week 802: Case 3","chunk":5,"position":1},{"id":"w802c2","title":"Week 802: Case 2","case_label":"Week 802: Case 2","chunk":5,"position":2},{"id":"w802c1","title":"Week 802: Case 1","case_label":"Week 802: Case 1","chunk":5,"position":3},{"id":"w801c3","title":"Week 801: Case 3","case_label":"Week 801: Case 3","chunk":5,"position":4},{"id":"w801c2","title":"Week 801: Case 2","case_label":"Week 801: Case 2","chunk":5,"position":5},{"id":"w801c1","title":"Week 801: Case 1","case_label":"Week 801: Case 1","chunk":5,"position":6},{"id":"w800c3","title":"Week 800: Case 3","case_label":"Week 800: Case 3","chunk":5,"position":7},{"id":"w800c2","title":"Week 800: Case 2","case_label":"Week 800: Case 2","chunk":5,"position":8},{"id":"w800c1","title":"Week 800: Case 1","case_label":"Week 800: Case 1","chunk":5,"position":9},{"id":"w799c3","title":"Week 799: Case 3","case_label":"Week 799: Case 3","chunk":6,"position":0},{"id":"w799c2","title":"Week 799: Case 2","case_label":"Week 799: Case 2","chunk":6,"position":1},{"id":"w799c1","title":"Week 799: Case 1","case_label":"Week 799: Case 1","chunk":6,"position":2},{"id":"w798c3","title":"Week 798: Case 3","case_label":"Week 798: Case 3","chunk":6,"position":3},{"id":"w798c2","title":"Week 798: Case 2","case_label":"Week 798: Case 2","chunk":6,"position":4},{"id":"w798c1","title":"Week 798: Case 1","case_label":"Week 798: Case 1","chunk":6,"position":5},{"id":"w797c3","title":"Week 797: Case 3","case_label":"Week 797: Case 3","chunk":6,"position":6},{"id":"w797c2","title":"Week 797: Case 2","case_label":"Week 797: Case 2","chunk":6,"position":7},{"id":"w797c1","title":"Week 797: Case 1","case_label":"Week 797: Case 1","chunk":6,"position":8},{"id":"w796c3","title":"Week 796: Case 3","case_label":"Week 796: Case 3","chunk":6,"position":9},{"id":"w796c2","title":"Week 796: Case 2","case_label":"Week 796: Case 2","chunk":7,"position":0},{"id":"w796c1","title":"Week 796: Case 1","case_label":"Week 796: Case 1","chunk":7,"position":1},{"id":"w795c3","title":"Week 795: Case 3","case_label":"Week 795: Case 3","chunk":7,"position":2},{"id":"w795c2","title":"Week 795: Case 2","case_label":"Week 795: Case 2","chunk":7,"position":3},{"id":"w795c1","title":"Week 795: Case 1","case_label":"Week 795: Case 1","chunk":7,"position":4},{"id":"w794c3","title":"Week 794: Case 3","case_label":"Week 794: Case 3","chunk":7,"position":5},{"id":"w794c2","title":"Week 794: Case 2","case_label":"Week 794: Case 2","chunk":7,"position":6},{"id":"w794c1","title":"Week 794: Case 1","case_label":"Week 794: Case 1","chunk":7,"position":7},{"id":"w793c3","title":"Week 793: Case 3","case_label":"Week 793: Case 3","chunk":7,"position":8},{"id":"w793c2","title":"Week 793: Case 2","case_label":"Week 793: Case 2","chunk":7,"position":9},{"id":"w793c1","title":"Week 793: Case 1","case_label":"Week 793: Case 1","chunk":8,"position":0},{"id":"w792c3","title":"Week 792: Case 3","case_label":"Week 792: Case 3","chunk":8,"position":1},{"id":"w792c2","title":"Week 792: Case 2","case_label":"Week 792: Case 2","chunk":8,"position":2},{"id":"w792c1","title":"Week 792: Case 1","case_label":"Week 792: Case 1","chunk":8,"position":3},{"id":"w791c3","title":"Week 791: Case 3","case_label":"Week 791: Case 3","chunk":8,"position":4},{"id":"w791c2","title":"Week 791: Case 2","case_label":"Week 791: Case 2","chunk":8,"position":5},{"id":"w791c1","title":"Week 791: Case 1","case_label":"Week 791: Case 1","chunk":8,"position":6},{"id":"w790c3","title":"Week 790: Case 3","case_label":"Week 790: Case 3","chunk":8,"position":7},{"id":"w790c2","title":"Week 790: Case 2","case_label":"Week 790: Case 2","chunk":8,"position":8},{"id":"w790c1","title":"Week 790: Case 1","case_label":"Week 790: Case 1","chunk":8,"position":9},{"id":"w789c3","title":"Week 789: Case 3","case_label":"Week 789: Case 3","chunk":9,"position":0},{"id":"w789c2","title":"Week 789: Case 2","case_label":"Week 789: Case 2","chunk":9,"position":1},{"id":"w789c1","title":"Week 789: Case 1","case_label":"Week 789: Case 1","chunk":9,"position":2},{"id":"w788c3","title":"Week 788: Case 3","case_label":"Week 788: Case 3","chunk":9,"position":3},{"id":"w788c2","title":"Week 788: Case 2","case_label":"Week 788: Case 2","chunk":9,"position":4},{"id":"w788c1","title":"Week 788: Case 1","case_label":"Week 788: Case 1","chunk":9,"position":5},{"id":"w787c3","title":"Week 787: Case 3","case_label":"Week 787: Case 3","chunk":9,"position":6},{"id":"w787c2","title":"Week 787: Case 2","case_label":"Week 787: Case 2","chunk":9,"position":7},{"id":"w787c1","title":"Week 787: Case 1","case_label":"Week 787: Case 1","chunk":9,"position":8},{"id":"w786c3","title":"Week 786: Case 3","case_label":"Week 786: Case 3","chunk":9,"position":9},{"id":"w786c2","title":"Week 786: Case 2","case_label":"Week 786: Case 2","chunk":10,"position":0},{"id":"w786c1","title":"Week 786: Case 1","case_label":"Week 786: Case 1","chunk":10,"position":1},{"id":"w785c3","title":"Week 785: Case 3","case_label":"Week 785: Case 3","chunk":10,"position":2},{"id":"w785c2","title":"Week 785: Case 2","case_label":"Week 785: Case 2","chunk":10,"position":3},{"id":"w785c1","title":"Week 785: Case 1","case_label":"Week 785: Case 1","chunk":10,"position":4},{"id":"w784c3","title":"Week 784: Case 3","case_label":"Week 784: Case 3","chunk":10,"position":5},{"id":"w784c2","title":"Week 784: Case 2","case_label":"Week 784: Case 2","chunk":10,"position":6},{"id":"w784c1","title":"Week 784: Case 1","case_label":"Week 784: Case 1","chunk":10,"position":7},{"id":"w783c3","title":"Week 783: Case 3","case_label":"Week 783: Case 3","chunk":10,"position":8},{"id":"w783c2","title":"Week 783: Case 2","case_label":"Week 783: Case 2","chunk":10,"position":9},{"id":"w783c1","title":"Week 783: Case 1","case_label":"Week 783: Case 1","chunk":11,"position":0},{"id":"w782c3","title":"Week 782: Case 3","case_label":"Week 782: Case 3","chunk":11,"position":1},{"id":"w782c2","title":"Week 782: Case 2","case_label":"Week 782: Case 2","chunk":11,"position":2},{"id":"w782c1","title":"Week 782: Case 1","case_label":"Week 782: Case 1","chunk":11,"position":3},{"id":"w781c3","title":"Week 781: Case 3","case_label":"Week 781: Case 3","chunk":11,"position":4},{"id":"w781c2","title":"Week 781: Case 2","case_label":"Week 781: Case 2","chunk":11,"position":5},{"id":"w781c1","title":"Week 781: Case 1","case_label":"Week 781: Case 1","chunk":11,"position":6},{"id":"w780c3","title":"Week 780: Case 3","case_label":"Week 780: Case 3","chunk":11,"position":7},{"id":"w780c2","title":"Week 780: Case 2","case_label":"Week 780: Case 2","chunk":11,"position":8},{"id":"w780c1","title":"Week 780: Case 1","case_label":"Week 780: Case 1","chunk":11,"position":9},{"id":"w779c3","title":"Week 779: Case 3","case_label":"Week 779: Case 3","chunk":12,"position":0},{"id":"w779c2","title":"Week 779: Case 2","case_label":"Week 779: Case 2","chunk":12,"position":1},{"id":"w779c1","title":"Week 779: Case 1","case_label":"Week 779: Case 1","chunk":12,"position":2},{"id":"w778c3","title":"Week 778: Case 3","case_label":"Week 778: Case 3","chunk":12,"position":3},{"id":"w778c2","title":"Week 778: Case 2","case_label":"Week 778: Case 2","chunk":12,"position":4},{"id":"w778c1","title":"Week 778: Case 1","case_label":"Week 778: Case 1","chunk":12,"position":5},{"id":"w777c3","title":"Week 777: Case 3","case_label":"Week 777: Case 3","chunk":12,"position":6},{"id":"w777c2","title":"Week 777: Case 2","case_label":"Week 777: Case 2","chunk":12,"position":7},{"id":"w777c1","title":"Week 777: Case 1","case_label":"Week 777: Case 1","chunk":12,"position":8},{"id":"w776c3","title":"Week 776: Case 3","case_label":"Week 776: Case 3","chunk":12,"position":9},{"id":"w776c2","title":"Week 776: Case 2","case_label":"Week 776: Case 2","chunk":13,"position":0},{"id":"w776c1","title":"Week 776: Case 1","case_label":"Week 776: Case 1","chunk":13,"position":1},{"id":"w775c3","title":"Week 775: Case 3","case_label":"Week 775: Case 3","chunk":13,"position":2},{"id":"w775c2","title":"Week 775: Case 2","case_label":"Week 775: Case 2","chunk":13,"position":3},{"id":"w775c1","title":"Week 775: Case 1","case_label":"Week 775: Case 1","chunk":13,"position":4},{"id":"w774c3","title":"Week 774: Case 3","case_label":"Week 774: Case 3","chunk":13,"position":5},{"id":"w774c2","title":"Week 774: Case 2","case_label":"Week 774: Case 2","chunk":13,"position":6},{"id":"w774c1","title":"Week 774: Case 1","case_label":"Week 774: Case 1","chunk":13,"position":7},{"id":"w773c3","title":"Week 773: Case 3","case_label":"Week 773: Case 3","chunk":13,"position":8},{"id":"w773c2","title":"Week 773: Case 2","case_label":"Week 773: Case 2","chunk":13,"position":9},{"id":"w773c1","title":"Week 773: Case 1","case_label":"Week 773: Case 1","chunk":14,"position":0},{"id":"w772c3","title":"Week 772: Case 3","case_label":"Week 772: Case 3","chunk":14,"position":1},{"id":"w772c2","title":"Week 772: Case 2","case_label":"Week 772: Case 2","chunk":14,"position":2},{"id":"w772c1","title":"Week 772: Case 1","case_label":"Week 772: Case 1","chunk":14,"position":3},{"id":"w771c3","title":"Week 771: Case 3","case_label":"Week 771: Case 3","chunk":14,"position":4},{"id":"w771c2","title":"Week 771: Case 2","case_label":"Week 771: Case 2","chunk":14,"position":5},{"id":"w771c1","title":"Week 771: Case 1","case_label":"Week 771: Case 1","chunk":14,"position":6},{"id":"w770c3","title":"Week 770: Case 3","case_label":"Week 770: Case 3","chunk":14,"position":7},{"id":"w770c2","title":"Week 770: Case 2","case_label":"Week 770: Case 2","chunk":14,"position":8},{"id":"w770c1","title":"Week 770: Case 1","case_label":"Week 770: Case 1","chunk":14,"position":9},{"id":"w769c3","title":"Week 769: Case 3","case_label":"Week 769: Case 3","chunk":15,"position":0},{"id":"w769c2","title":"Week 769: Case 2","case_label":"Week 769: Case 2","chunk":15,"position":1},{"id":"w769c1","title":"Week 769: Case 1","case_label":"Week 769: Case 1","chunk":15,"position":2},{"id":"week769bonuscase3","title":"Week 769: Bonus Case 3","case_label":"Week 769: Bonus Case 3","chunk":15,"position":3},{"id":"week769bonuscase2","title":"Week 769: Bonus Case 2","case_label":"Week 769: Bonus Case 2","chunk":15,"position":4},{"id":"week769bonuscase1","title":"Week 769: Bonus Case 1","case_label":"Week 769: Bonus Case 1","chunk":15,"position":5},{"id":"w768c3","title":"Week 768: Case 3","case_label":"Week 768: Case 3","chunk":15,"position":6},{"id":"w768c2","title":"Week 768: Case 2","case_label":"Week 768: Case 2","chunk":15,"position":7},{"id":"w768c1","title":"Week 768: Case 1","case_label":"Week 768: Case 1","chunk":15,"position":8},{"id":"w767c3","title":"Week 767: Case 3","case_label":"Week 767: Case 3","chunk":15,"position":9},{"id":"w767c2","title":"Week 767: Case 2","case_label":"Week 767: Case 2","chunk":16,"position":0},{"id":"w767c1","title":"Week 767: Case 1","case_label":"Week 767: Case 1","chunk":16,"position":1},{"id":"w766c3","title":"Week 766: Case 3","case_label":"Week 766: Case 3","chunk":16,"position":2},{"id":"w766c2","title":"Week 766: Case 2","case_label":"Week 766: Case 2","chunk":16,"position":3},{"id":"w766c1","title":"Week 766: Case 1","case_label":"Week 766: Case 1","chunk":16,"position":4},{"id":"w765c3","title":"Week 765: Case 3","case_label":"Week 765: Case 3","chunk":16,"position":5},{"id":"w765c2","title":"Week 765: Case 2","case_label":"Week 765: Case 2","chunk":16,"position":6},{"id":"w765c1","title":"Week 765: Case 1","case_label":"Week 765: Case 1","chunk":16,"position":7},{"id":"w764c3","title":"Week 764: Case 3","case_label":"Week 764: Case 3","chunk":16,"position":8},{"id":"w764c2","title":"Week 764: Case 2","case_label":"Week 764: Case 2","chunk":16,"position":9},{"id":"w764c1","title":"Week 764: case 1","case_label":"Week 764: case 1","chunk":17,"position":0},{"id":"w763c3","title":"Week 763: Case 3","case_label":"Week 763: Case 3","chunk":17,"position":1},{"id":"w763c2","title":"Week 763: Case 2","case_label":"Week 763: Case 2","chunk":17,"position":2},{"id":"w763c1","title":"Week 763: Case 1","case_label":"Week 763: Case 1","chunk":17,"position":3},{"id":"w762c3","title":"Week 762: Case 3","case_label":"Week 762: Case 3","chunk":17,"position":4},{"id":"w762c2","title":"Week 762: Case 2","case_label":"Week 762: Case 2","chunk":17,"position":5},{"id":"w762c1","title":"Week 762: Case 1","case_label":"Week 762: Case 1","chunk":17,"position":6},{"id":"w761c3","title":"Week 761: Case3","case_label":"Week 761: Case3","chunk":17,"position":7},{"id":"w761c2","title":"Week 761: Case 2","case_label":"Week 761: Case 2","chunk":17,"position":8},{"id":"w761c1","title":"Week 761: Case 1","case_label":"Week 761: Case 1","chunk":17,"position":9},{"id":"w760c3","title":"Week 760: Case 3","case_label":"Week 760: Case 3","chunk":18,"position":0},{"id":"w760c2","title":"Week 760: Case 2","case_label":"Week 760: Case 2","chunk":18,"position":1},{"id":"w760c1","title":"Week 760: Case 1","case_label":"Week 760: Case 1","chunk":18,"position":2},{"id":"w759c3","title":"Week 759: Case 3","case_label":"Week 759: Case 3","chunk":18,"position":3},{"id":"w759c2","title":"Week 759: Case 2","case_label":"Week 759: Case 2","chunk":18,"position":4},{"id":"w759c1","title":"Week 759: Case 1","case_label":"Week 759: Case 1","chunk":18,"position":5},{"id":"w758c3","title":"Week 758: Case 3","case_label":"Week 758: Case 3","chunk":18,"position":6},{"id":"w758c2","title":"Week 758: Case 2","case_label":"Week 758: Case 2","chunk":18,"position":7},{"id":"w758c1","title":"Week 758: Case 1","case_label":"Week 758: Case 1","chunk":18,"position":8},{"id":"w757c3","title":"Week 757: Case 3","case_label":"Week 757: Case 3","chunk":18,"position":9},{"id":"w757c2","title":"Week 757: Case 2","case_label":"Week 757: Case 2","chunk":19,"position":0},{"id":"w757c1","title":"Week 757: Case 1","case_label":"Week 757: Case 1","chunk":19,"position":1},{"id":"w756c3","title":"Week 756: Case 3","case_label":"Week 756: Case 3","chunk":19,"position":2},{"id":"w756c2","title":"Week 756: Case 2","case_label":"Week 756: Case 2","chunk":19,"position":3},{"id":"w756c1","title":"Week 756: Case 1","case_label":"Week 756: Case 1","chunk":19,"position":4},{"id":"w755c3","title":"Week 755: Case 3","case_label":"Week 755: Case 3","chunk":19,"position":5},{"id":"w755c2","title":"Week 755: Case 2","case_label":"Week 755: Case 2","chunk":19,"position":6},{"id":"w755c1","title":"Week 755: Case 1","case_label":"Week 755: Case 1","chunk":19,"position":7},{"id":"w754c3","title":"Week 754: Case 3","case_label":"Week 754: Case 3","chunk":19,"position":8},{"id":"w754c2","title":"Week 754: Case 2","case_label":"Week 754: Case 2","chunk":19,"position":9}];
  var caseChunks = ["/assets/pathunknowns/cases10/cases-001-010.json","/assets/pathunknowns/cases10/cases-011-020.json","/assets/pathunknowns/cases10/cases-021-030.json","/assets/pathunknowns/cases10/cases-031-040.json","/assets/pathunknowns/cases10/cases-041-050.json","/assets/pathunknowns/cases10/cases-051-060.json","/assets/pathunknowns/cases10/cases-061-070.json","/assets/pathunknowns/cases10/cases-071-080.json","/assets/pathunknowns/cases10/cases-081-090.json","/assets/pathunknowns/cases10/cases-091-100.json","/assets/pathunknowns/cases10/cases-101-110.json","/assets/pathunknowns/cases10/cases-111-120.json","/assets/pathunknowns/cases10/cases-121-130.json","/assets/pathunknowns/cases10/cases-131-140.json","/assets/pathunknowns/cases10/cases-141-150.json","/assets/pathunknowns/cases10/cases-151-160.json","/assets/pathunknowns/cases10/cases-161-170.json","/assets/pathunknowns/cases10/cases-171-180.json","/assets/pathunknowns/cases10/cases-181-190.json","/assets/pathunknowns/cases10/cases-191-200.json"];
  var stainChunks = ["/assets/pathunknowns/v2/cases-001-050.json","/assets/pathunknowns/v2/cases-051-100.json","/assets/pathunknowns/v2/cases-101-150.json","/assets/pathunknowns/v2/cases-151-200.json"];
  var loadedCaseChunks = {};
  var loadedStainChunks = {};
  var currentIndexEntry = null;

  function byId(id) {
    return document.getElementById(id);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c];
    });
  }

  function loadProgress() {
    try {
      var raw = window.localStorage.getItem(progressKey);
      progress = raw ? JSON.parse(raw) : {};
      if (!progress || typeof progress !== "object") progress = {};
    } catch (e) {
      progress = {};
    }
  }

  function saveProgress() {
    try {
      window.localStorage.setItem(progressKey, JSON.stringify(progress));
    } catch (e) {
      // Progress persistence is optional; gameplay should continue if storage is unavailable.
    }
  }

  function progressFor(caseId) {
    return progress[caseId] || null;
  }

  function recordAttempt(caseData, firstAnswer, finalAnswer, correct) {
    var prior = progressFor(caseData.id);
    var attempts = prior && Array.isArray(prior.attemptHistory) ? prior.attemptHistory.slice() : [];
    attempts.push({
      firstAnswer: firstAnswer || "",
      finalAnswer: finalAnswer || "",
      correct: !!correct,
      at: new Date().toISOString()
    });

    progress[caseData.id] = {
      attempts: attempts.length,
      firstCorrect: prior ? !!prior.firstCorrect : !!correct,
      everCorrect: (prior && prior.everCorrect) || !!correct,
      lastCorrect: !!correct,
      firstAnswer: prior ? prior.firstAnswer : (firstAnswer || ""),
      lastAnswer: finalAnswer || "",
      lastAttempt: attempts[attempts.length - 1].at,
      attemptHistory: attempts
    };
    saveProgress();
    renderProgress();
  }

  function progressCounts() {
    var completed = 0;
    var firstTryCorrect = 0;
    var review = 0;
    var mastered = 0;

    caseIndex.forEach(function (entry) {
      var p = progressFor(entry.id);
      if (!p || !p.attempts) return;
      completed += 1;
      if (p.firstCorrect) firstTryCorrect += 1;
      if (!p.lastCorrect) review += 1;
      if (!p.firstCorrect && p.lastCorrect) mastered += 1;
    });

    return {completed:completed, firstTryCorrect:firstTryCorrect, review:review, mastered:mastered};
  }

  function reviewIndexes() {
    var indexes = [];
    caseIndex.forEach(function (entry, i) {
      var p = progressFor(entry.id);
      if (p && p.attempts && !p.lastCorrect) indexes.push(i);
    });
    return indexes;
  }

  function caseMatchesFilter(entry) {
    var p = progressFor(entry.id);
    if (activeFilter === "unseen") return !p || !p.attempts;
    if (activeFilter === "review") return !!(p && p.attempts && !p.lastCorrect);
    if (activeFilter === "correct") return !!(p && p.attempts && p.firstCorrect);
    if (activeFilter === "mastered") return !!(p && p.attempts && !p.firstCorrect && p.lastCorrect);
    return true;
  }

  function filteredIndexes() {
    var indexes = [];
    caseIndex.forEach(function (entry, i) {
      if (caseMatchesFilter(entry)) indexes.push(i);
    });
    return indexes;
  }

  function renderFilterControls() {
    var select = byId("puCaseFilter");
    var status = byId("puFilterStatus");
    if (!select) return;

    select.value = activeFilter;
    var indexes = filteredIndexes();
    if (status) {
      status.textContent = indexes.length + " case" + (indexes.length === 1 ? "" : "s") + " in this view";
    }
  }

  function applyCaseFilter(value) {
    activeFilter = value || "all";
    renderFilterControls();
    buildCaseJumpOptions();
    renderCaseNav();

    var indexes = filteredIndexes();
    if (!indexes.length) {
      if (byId("puFilterStatus")) byId("puFilterStatus").textContent = "No cases match this filter.";
      return;
    }
    if (indexes.indexOf(current) === -1) {
      loadCaseByGlobalIndex(indexes[0], true).catch(showLoadError);
    }
  }

  function renderProgress() {
    var counts = progressCounts();
    var summary = byId("puProgressSummary");
    if (summary) {
      summary.textContent =
        counts.completed + " completed · " +
        counts.firstTryCorrect + " first-try correct · " +
        counts.mastered + " mastered after retry · " +
        counts.review + " to review";
    }

    var reviewBtn = byId("puReviewMissedBtn");
    if (reviewBtn) {
      reviewBtn.disabled = counts.review === 0;
      reviewBtn.textContent = counts.review ? "Review missed (" + counts.review + ")" : "Review missed";
    }

    renderFilterControls();
    buildCaseJumpOptions();
    renderCaseNav();
  }

  function goToReviewCase() {
    var indexes = reviewIndexes();
    var status = byId("puProgressStatus");
    if (!indexes.length) {
      if (status) status.textContent = "No missed cases are waiting for review.";
      return;
    }

    var next = indexes.find(function (i) { return i > current; });
    if (typeof next === "undefined") next = indexes[0];
    if (status) status.textContent = "";
    loadCaseByGlobalIndex(next, true).catch(showLoadError);
  }

  function resetProgress() {
    if (!window.confirm("Reset all saved PathUnknowns progress on this browser?")) return;
    progress = {};
    try { window.localStorage.removeItem(progressKey); } catch (e) {}
    if (byId("puProgressStatus")) byId("puProgressStatus").textContent = "Progress reset.";
    renderProgress();
  }

  function normalizeDiagnosis(value) {
    return String(value || "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/^\s*[a-d]\s*[.):-]\s*/i, "")
      .replace(/\b(correct|wrong)\b/gi, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function acceptedAnswers(correctAnswer) {
    var aliases = [correctAnswer];
    var match = String(correctAnswer || "").match(/\(([^)]+)\)/);
    if (match && match[1]) {
      aliases.push(match[1]);
      aliases.push(String(correctAnswer).replace(/\s*\([^)]+\)\s*/, " "));
    }
    return Array.from(new Set(aliases.map(normalizeDiagnosis).filter(Boolean)));
  }

  function isCorrectAnswer(userAnswer, correctAnswer) {
    var normalized = normalizeDiagnosis(userAnswer);
    return normalized && acceptedAnswers(correctAnswer).indexOf(normalized) !== -1;
  }

  function sanitizeFeedback(html) {
    var doc = new DOMParser().parseFromString("<div>" + String(html || "") + "</div>", "text/html");
    doc.querySelectorAll("script,style,iframe,object,embed,form,input,button,textarea,select,svg,math,link,meta,base,video,audio").forEach(function (el) {
      el.remove();
    });
    doc.querySelectorAll("*").forEach(function (el) {
      Array.from(el.attributes).forEach(function (attr) {
        var name = attr.name.toLowerCase();
        var keepHref = el.tagName === "A" && name === "href" && /^https?:\/\//i.test(attr.value);
        if (!keepHref) {
          el.removeAttribute(attr.name);
        }
      });
      if (el.tagName === "A") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    });
    return doc.body.firstElementChild ? doc.body.firstElementChild.innerHTML : "";
  }

  function normalizeStain(value) {
    return String(value || "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "");
  }

  function stainAliases(stain) {
    return [stain.name].concat(stain.aliases || []);
  }

  function findStain(caseData, query) {
    var needle = normalizeStain(query);
    if (!needle) return null;
    return (caseData.stains || []).find(function (stain) {
      return stainAliases(stain).some(function (name) {
        return normalizeStain(name) === needle;
      });
    }) || null;
  }

  function orderedForCase(caseData) {
    if (!orderedStains[caseData.id]) orderedStains[caseData.id] = [];
    return orderedStains[caseData.id];
  }

  function renderStainControls() {
    var c = cases[current];
    var stains = (c.stains || []).slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    byId("puStainSuggestToggle").checked = stainSuggesterOn;
    byId("puStainInput").style.display = stainSuggesterOn ? "none" : "";
    byId("puStainSelect").style.display = stainSuggesterOn ? "" : "none";

    var sourceLabel = c.stain_selection === "jhu_discussion"
      ? " from the JHU discussion"
      : (c.stain_selection === "educational_fallback" ? " (educational fallback)" : "");
    byId("puStainAvailability").textContent = stains.length
      ? stains.length + " stain" + (stains.length === 1 ? "" : "s") + " available to order" + sourceLabel
      : "No stain data loaded for this case.";

    byId("puStainSelect").innerHTML =
      '<option value="">Select a stain…</option>' +
      stains.map(function (stain) {
        return '<option value="' + escapeHtml(stain.name) + '">' + escapeHtml(stain.name) + '</option>';
      }).join("");

    byId("puStainInput").value = "";
    byId("puStainSelect").value = "";
    byId("puStainStatus").textContent = "";
    renderStainLog();
  }

  function renderStainLog() {
    var c = cases[current];
    var log = orderedForCase(c);
    var box = byId("puStainLog");

    if (!log.length) {
      box.className = "pu-stain-log";
      box.innerHTML = "";
      return;
    }

    box.className = "pu-stain-log show";
    box.innerHTML =
      '<table><thead><tr><th>Stain</th><th>Result</th></tr></thead><tbody>' +
      log.map(function (item) {
        return '<tr><td>' + escapeHtml(item.name) + '</td><td class="pu-stain-result">' +
          escapeHtml(item.result) + '</td></tr>';
      }).join("") +
      '</tbody></table>';
  }

  function orderStain() {
    var c = cases[current];
    var query = stainSuggesterOn ? byId("puStainSelect").value : byId("puStainInput").value;
    var status = byId("puStainStatus");

    if (!String(query || "").trim()) {
      status.textContent = "Enter or select a stain first.";
      return;
    }

    var stain = findStain(c, query);
    if (!stain) {
      status.textContent = "That stain is not available for this case.";
      return;
    }

    var log = orderedForCase(c);
    var already = log.some(function (item) {
      return normalizeStain(item.name) === normalizeStain(stain.name);
    });

    if (!already) {
      log.push({
        name: stain.name,
        result: stain.result_display || stain.result
      });
    }

    status.textContent = stain.name + ": " + (stain.result_display || stain.result);
    renderStainLog();

    if (stainSuggesterOn) {
      byId("puStainSelect").value = "";
    } else {
      byId("puStainInput").value = "";
    }
  }

  function indexEntryAt(i) {
    return caseIndex[i] || null;
  }

  function fetchJsonWithTimeout(url, timeoutMs) {
    var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer = setTimeout(function () {
      if (controller) controller.abort();
    }, timeoutMs || 12000);

    return fetch(url, {
      cache:"no-store",
      signal: controller ? controller.signal : undefined
    }).then(function (response) {
      clearTimeout(timer);
      if (!response.ok) throw new Error("HTTP " + response.status + " for " + url);
      return response.json();
    }).catch(function (err) {
      clearTimeout(timer);
      if (err && err.name === "AbortError") throw new Error("Timed out loading " + url);
      throw err;
    });
  }

  function loadCaseChunk(chunkIndex) {
    if (loadedCaseChunks[chunkIndex]) {
      return Promise.resolve(loadedCaseChunks[chunkIndex]);
    }
    var url = caseChunks[chunkIndex];
    if (!url) return Promise.reject(new Error("Missing case chunk " + chunkIndex));

    return fetchJsonWithTimeout(url + "?v=20261107-loader2", 12000)
      .then(function (payload) {
        loadedCaseChunks[chunkIndex] = payload.cases || [];
        return loadedCaseChunks[chunkIndex];
      });
  }

  function loadStainChunk(caseChunkIndex) {
    var chunkIndex = Math.floor(caseChunkIndex / 5);
    if (loadedStainChunks[chunkIndex]) {
      return Promise.resolve(loadedStainChunks[chunkIndex]);
    }
    var url = stainChunks[chunkIndex];
    if (!url) return Promise.resolve({});

    return fetchJsonWithTimeout(url + "?v=20261108-stainparser2", 12000)
      .then(function (payload) {
        var rows = payload.cases || [];
        var stainMap = {};
        if (Array.isArray(rows)) {
          rows.forEach(function (item) {
            if (item && item.id) stainMap[item.id] = item;
          });
        } else {
          stainMap = rows;
        }
        loadedStainChunks[chunkIndex] = stainMap;
        return loadedStainChunks[chunkIndex];
      });
  }

  function mergeStains(caseData, stainMap) {
    var catalogEntry = stainMap && stainMap[caseData.id];
    if (!catalogEntry) return caseData;

    caseData.stains = (catalogEntry.stains || []).slice();
    caseData.stain_selection = catalogEntry.stain_selection || "";
    caseData.stain_status = caseData.stains.length ? "available" : "unavailable";
    return caseData;
  }

  function loadCaseByGlobalIndex(globalIndex, scrollToTop) {
    var entry = indexEntryAt(globalIndex);
    if (!entry) return Promise.reject(new Error("Unknown case index " + globalIndex));

    current = globalIndex;
    currentIndexEntry = entry;
    byId("puLoading").textContent = "Loading case…";

    return loadCaseChunk(entry.chunk).then(function (chunkCases) {
      var caseData = chunkCases[entry.position];
      if (!caseData) throw new Error("Case not found in chunk: " + entry.id);

      cases[current] = caseData;
      renderDiagnosisPool();
      byId("puLoading").style.display = "none";
      byId("puApp").style.display = "block";
      render();

      // Stains should never block the case from appearing.
      loadStainChunk(entry.chunk).then(function (stainMap) {
        mergeStains(caseData, stainMap);
        if (current === globalIndex) renderStainControls();
      }).catch(function () {
        if (current === globalIndex) {
          byId("puStainAvailability").textContent = "Stain data could not be loaded for this case.";
        }
      });

      if (scrollToTop) {
        var target = document.querySelector(".pathunknowns");
        if (target) target.scrollIntoView({behavior:"smooth", block:"start"});
      }
      return caseData;
    });
  }

  function renderDiagnosisPool() {
    var pool = [];
    Object.keys(loadedCaseChunks).forEach(function (key) {
      (loadedCaseChunks[key] || []).forEach(function (c) {
        (c.choices || []).forEach(function (choice) { pool.push(choice); });
      });
    });
    pool = Array.from(new Set(pool)).sort(function (a, b) { return a.localeCompare(b); });
    byId("puDiagnosisList").innerHTML = pool.map(function (d) {
      return '<option value="' + escapeHtml(d) + '"></option>';
    }).join("");
  }

  function normalizeImageUrl(src) {
    src = String(src || "");
    if (/^http:\/\/sp\.pathology\.jhu\.edu\//i.test(src)) {
      return src.replace(/^http:\/\//i, "https://");
    }
    return src;
  }

  function render() {
    var c = cases[current];

    byId("puCaseTitle").textContent = c.title;
    byId("puCaseCounter").textContent = "Case " + (current + 1) + " of " + caseIndex.length;
    byId("puAttribution").textContent = c.attribution || "";
    byId("puVignette").textContent = c.vignette || "";

    byId("puGallery").innerHTML = (c.images || []).map(function (src, i) {
      var imageUrl = normalizeImageUrl(src);
      return '<button type="button" class="pu-image-button" data-pu-image="' + escapeHtml(imageUrl) + '" aria-label="Enlarge image ' + (i + 1) + '">' +
        '<img loading="lazy" referrerpolicy="no-referrer" src="' + escapeHtml(imageUrl) + '" alt="' + escapeHtml(c.title) + ' pathology image ' + (i + 1) + '" ' +
        'onerror="this.onerror=null;this.closest(\'button\').classList.add(\'pu-image-failed\');">' +
        '</button>';
    }).join("");

    renderStainControls();

    pendingAnswer = "";
    byId("puDiagnosisInput").disabled = false;
    byId("puDiagnosisInput").value = "";
    byId("puSubmitBtn").disabled = false;
    byId("puSubmitBtn").textContent = "Continue";
    byId("puChoicePanel").className = "pu-choice-panel";
    byId("puChoicePanel").innerHTML = "";
    byId("puResult").className = "pu-result";
    byId("puResult").innerHTML = "";

    renderFilterControls();
    buildCaseJumpOptions();
    renderCaseNav();

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", "#" + c.id);
    }
  }

  function closeImageLightbox() {
    var box = byId("puImageLightbox");
    if (!box) return;
    box.className = "pu-lightbox";
    byId("puLightboxImage").removeAttribute("src");
    document.body.classList.remove("pu-lightbox-open");
  }

  function openImageLightbox(src, alt) {
    var box = byId("puImageLightbox");
    var image = byId("puLightboxImage");
    if (!box || !image) return;
    image.src = src;
    image.alt = alt || "Enlarged pathology image";
    box.className = "pu-lightbox show";
    document.body.classList.add("pu-lightbox-open");
  }

  function choiceLetter(index) {
    return String.fromCharCode(65 + index);
  }

  function showOriginalChoices() {
    var c = cases[current];
    var answer = byId("puDiagnosisInput").value.trim();
    var panel = byId("puChoicePanel");

    if (!answer) {
      byId("puResult").className = "pu-result show incorrect";
      byId("puResult").innerHTML = "<strong>Enter a diagnosis before continuing.</strong>";
      return;
    }

    pendingAnswer = answer;
    byId("puDiagnosisInput").disabled = true;
    byId("puSubmitBtn").disabled = true;

    var normalizedInitial = normalizeDiagnosis(answer);
    var matchingIndex = (c.choices || []).findIndex(function (choice) {
      return normalizeDiagnosis(choice) === normalizedInitial;
    });

    panel.className = "pu-choice-panel show";
    panel.innerHTML =
      '<h4>Before you lock it in…</h4>' +
      '<div class="pu-initial-answer">Your first impression: <strong>' + escapeHtml(answer) + '</strong></div>' +
      '<div>These were the original answer choices. You can double down on your free-text answer or switch to one of them.</div>' +
      '<div class="pu-choice-list">' +
      (c.choices || []).map(function (choice, i) {
        var checked = i === matchingIndex ? " checked" : "";
        return '<label class="pu-choice-option">' +
          '<input type="radio" name="puFinalChoice" value="' + escapeHtml(choice) + '"' + checked + '>' +
          '<span><strong>' + choiceLetter(i) + '.</strong> ' + escapeHtml(choice) + '</span>' +
          '</label>';
      }).join("") +
      '</div>' +
      '<div class="pu-choice-actions">' +
        '<button class="pu-primary" id="puDoubleDownBtn">Double down on my answer</button>' +
        '<button id="puLockChoiceBtn">Submit selected option</button>' +
        '<button id="puEditAnswerBtn">Edit first impression</button>' +
      '</div>' +
      '<div class="pu-choice-status" id="puChoiceStatus"></div>';

    byId("puResult").className = "pu-result";
    byId("puResult").innerHTML = "";

    byId("puDoubleDownBtn").onclick = function () {
      finalizeAnswer(pendingAnswer, "double-down");
    };

    byId("puLockChoiceBtn").onclick = function () {
      var selected = document.querySelector('input[name="puFinalChoice"]:checked');
      if (!selected) {
        byId("puChoiceStatus").textContent = "Select one of the original options first.";
        return;
      }
      finalizeAnswer(selected.value, "multiple-choice");
    };

    byId("puEditAnswerBtn").onclick = function () {
      panel.className = "pu-choice-panel";
      panel.innerHTML = "";
      byId("puDiagnosisInput").disabled = false;
      byId("puSubmitBtn").disabled = false;
      byId("puDiagnosisInput").focus();
    };
  }

  function finalizeAnswer(finalAnswer, mode) {
    var c = cases[current];
    var correct = isCorrectAnswer(finalAnswer, c.correct_answer);
    var result = byId("puResult");
    var changed = normalizeDiagnosis(finalAnswer) !== normalizeDiagnosis(pendingAnswer);

    recordAttempt(c, pendingAnswer, finalAnswer, correct);

    result.className = "pu-result show " + (correct ? "correct" : "incorrect");

    var heading = correct ? "Correct." : "Not quite.";
    var answerSummary =
      'Final answer: <strong>' + escapeHtml(finalAnswer) + '</strong>.' +
      (changed ? '<br>First impression: <em>' + escapeHtml(pendingAnswer) + '</em>.' : '');

    result.innerHTML =
      '<div class="pu-result-head"><strong>' + heading + '</strong><br>' + answerSummary +
      '<br>Official diagnosis: <strong>' + escapeHtml(c.correct_answer) + '</strong></div>' +
      '<div class="pu-feedback">' + sanitizeFeedback(c.feedback_html || "") + '</div>' +
      '<div class="pu-source-row">' + escapeHtml(c.attribution || "") + '<br>' +
      '<a href="' + escapeHtml(c.url) + '" target="_blank" rel="noopener">Open the original JHU case</a></div>';

    byId("puChoicePanel").className = "pu-choice-panel";
    byId("puChoicePanel").innerHTML = "";
    byId("puSubmitBtn").textContent = mode === "double-down" ? "Doubled down" : "Answer locked";
  }

  function buildCaseJumpOptions() {
    var indexes = filteredIndexes();
    byId("puCaseJump").innerHTML = indexes.map(function (i) {
      var c = caseIndex[i];
      return '<option value="' + i + '">' + escapeHtml(c.title) + '</option>';
    }).join("");
    byId("puCaseJump").disabled = indexes.length === 0;
    if (indexes.indexOf(current) !== -1) byId("puCaseJump").value = String(current);
  }

  function buildCaseList() {
    buildCaseJumpOptions();

    byId("puCaseJump").addEventListener("change", function () {
      loadCaseByGlobalIndex(Number(this.value), true).catch(showLoadError);
    });

    byId("puCaseList").addEventListener("click", function (e) {
      var button = e.target.closest("button[data-i]");
      if (!button) return;
      loadCaseByGlobalIndex(Number(button.dataset.i), true).catch(showLoadError);
    });
  }

  function renderCaseNav() {
    var indexes = filteredIndexes();
    if (indexes.indexOf(current) !== -1) byId("puCaseJump").value = String(current);

    var position = indexes.indexOf(current);
    if (position < 0) position = 0;
    var start = Math.max(0, position - 4);
    var end = Math.min(indexes.length, start + 9);
    start = Math.max(0, end - 9);
    var visible = indexes.slice(start, end);

    byId("puCaseList").innerHTML = visible.map(function (i) {
      var c = caseIndex[i];
      var p = progressFor(c.id);
      var classes = [];
      var label = c.title.replace("Week ", "W");
      if (i === current) classes.push("active");
      if (p && p.attempts) {
        if (p.firstCorrect) {
          classes.push("status-correct");
          label += " ✓";
        } else if (p.lastCorrect) {
          classes.push("status-mastered");
          label += " ✓*";
        } else {
          classes.push("status-review");
          label += " •";
        }
      }
      return '<button data-i="' + i + '" class="' + classes.join(" ") + '">' +
        escapeHtml(label) + '</button>';
    }).join("");

    var prev = indexes.filter(function (i) { return i < current; });
    var next = indexes.filter(function (i) { return i > current; });
    byId("puPrevBtn").disabled = indexes.length === 0 || prev.length === 0;
    byId("puNextBtn").disabled = indexes.length === 0 || next.length === 0;
    byId("puRandomBtn").disabled = indexes.length <= 1;
  }

  function showLoadError(err) {
    byId("puLoading").style.display = "block";
    byId("puLoading").textContent = "PathUnknowns could not load: " + err.message;
  }

  byId("puPrevBtn").onclick = function () {
    var indexes = filteredIndexes();
    var position = indexes.indexOf(current);
    if (position > 0) loadCaseByGlobalIndex(indexes[position - 1], true).catch(showLoadError);
  };

  byId("puNextBtn").onclick = function () {
    var indexes = filteredIndexes();
    var position = indexes.indexOf(current);
    if (position >= 0 && position < indexes.length - 1) {
      loadCaseByGlobalIndex(indexes[position + 1], true).catch(showLoadError);
    }
  };

  byId("puRandomBtn").onclick = function () {
    var indexes = filteredIndexes();
    if (indexes.length < 2) return;
    var next = current;
    while (next === current) {
      next = indexes[Math.floor(Math.random() * indexes.length)];
    }
    loadCaseByGlobalIndex(next, true).catch(showLoadError);
  };

  byId("puStainSuggestToggle").addEventListener("change", function () {
    stainSuggesterOn = this.checked;
    renderStainControls();
  });

  byId("puOrderStainBtn").onclick = orderStain;

  byId("puStainInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") orderStain();
  });

  byId("puStainSelect").addEventListener("change", function () {
    byId("puStainStatus").textContent = "";
  });

  byId("puGallery").addEventListener("click", function (e) {
    var button = e.target.closest(".pu-image-button");
    if (!button || button.classList.contains("pu-image-failed")) return;
    openImageLightbox(button.getAttribute("data-pu-image"), button.querySelector("img") ? button.querySelector("img").alt : "");
  });

  byId("puLightboxClose").onclick = closeImageLightbox;
  byId("puImageLightbox").addEventListener("click", function (e) {
    if (e.target === this) closeImageLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeImageLightbox();
  });

  byId("puCaseFilter").addEventListener("change", function () { applyCaseFilter(this.value); });
  byId("puReviewMissedBtn").onclick = function () { applyCaseFilter("review"); goToReviewCase(); };
  byId("puResetProgressBtn").onclick = resetProgress;

  byId("puSubmitBtn").onclick = showOriginalChoices;

  byId("puDiagnosisInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      showOriginalChoices();
    }
  });

  byId("puLoading").textContent = "Loading case…";
  cases = new Array(caseIndex.length);
  loadProgress();
  buildCaseList();
  renderProgress();

  var initialHash = window.location.hash.slice(1);
  var initialIndex = caseIndex.findIndex(function (entry) { return entry.id === initialHash; });
  if (initialIndex < 0) initialIndex = 0;

  loadCaseByGlobalIndex(initialIndex, false).catch(showLoadError);
})();
