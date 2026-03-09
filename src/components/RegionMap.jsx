import React from 'react';

const RegionMap = ({ regions, selectedRegion, onRegionClick }) => {
  const getRegionColor = (regionId) => {
    if (selectedRegion === regionId) {
      return 'fill-blue-600 stroke-blue-800 stroke-2';
    }
    return 'fill-blue-200 stroke-blue-400 hover:fill-blue-300 cursor-pointer transition-colors duration-150';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-3 md:p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base md:text-lg font-medium text-gray-700">Hmawbi Township - Health Facility Map</h2>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          6 Facilities
        </span>
      </div>
      
      <div className="aspect-square w-full max-w-2xl mx-auto">
        <svg
          viewBox="0 0 800 1000"
          className="w-full h-full"
          style={{ minHeight: { mobile: '300px', desktop: '450px' } }}
        >
          {/* မြောင်းတကာ RHC - Northern Area */}
          <g onClick={() => onRegionClick('yaeman')} className="cursor-pointer">
            <polygon
              points="455,608 444,610 429,618 416,619 401,622 389,634 373,634 358,637 345,635 344,643 332,651 329,664 322,667 306,681 300,685 292,685 274,685 262,677 254,672 247,671 241,668 232,659 236,654 228,647 229,632 237,629 248,633 267,620 271,610 280,597 283,584 285,573 275,560 268,552 263,541 269,533 256,529 248,527 242,516 242,507 244,500 238,492 233,484 226,478 218,477 208,479 200,477 194,464 191,452 183,447 179,450 167,454 153,449 143,445 133,436 119,427 119,410 111,400 119,391 122,375 123,364 115,356 110,344 113,336 172,330 181,330 189,333 195,333 205,332 212,335 220,335 233,332 239,329 245,326 254,320 265,320 272,314 280,313 281,319 285,325 287,331 292,336 295,342 303,342 309,347 314,353 317,359 317,365 317,373 322,380 325,388 325,394 329,400 334,404 340,410 347,412 351,416 358,416 365,419 370,421 376,424 382,423 390,425 394,429 394,436 396,442 397,449 396,457 396,462 397,471 398,477 398,487 401,491 406,495 409,502 410,508 410,514 408,520 407,528 405,534 405,539 406,547 407,554 408,562 411,568 413,574 418,577 427,581 437,584 445,582 453,584 461,586 469,587 477,589 476,595 476,602 472,606 463,604"
              className={getRegionColor('yaeman')}
              strokeWidth="1.5"
            />
            <circle cx="280" cy="470" r="5" fill="white" stroke="black" strokeWidth="1.5" />
            <text
              x="280"
              y="450"
              textAnchor="middle"
              className="text-[8px] md:text-[10px] font-medium fill-gray-800 pointer-events-none"
            >
              မြောင်းတကာ
            </text>
            <text
              x="280"
              y="465"
              textAnchor="middle"
              className="text-[7px] md:text-[9px] fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* ဝါးနက်ချောင်း RHC - Southern */}
          <g onClick={() => onRegionClick('warnet')} className="cursor-pointer">
            <polygon
              points="271,315 275,306 276,299 279,291 284,287 299,282 307,279 307,267 304,258 304,247 311,241 318,239 327,239 334,237 341,242 349,246 358,251 362,259 372,267 379,276 388,282 396,295 407,299 414,303 421,307 432,310 443,313 447,316 454,320 463,323 467,328 475,329 482,335 485,345 491,351 491,359 493,366 489,375 491,382 491,389 502,391 511,391 518,391 528,386 539,387 546,385 554,391 562,389 568,384 584,383 596,385 603,386 604,392 605,398 606,405 606,411 607,423 603,435 603,443 603,451 606,458 599,462 599,471 594,480 591,487 584,493 583,500 586,505 577,500 571,501 562,496 561,507 561,512 563,517 563,524 559,535 555,539 552,544 550,552 547,558 539,558 531,563 531,569 525,575 521,586 517,595 517,603 516,611 514,616 514,623 514,628 517,634 510,639 501,635 489,635 483,635 479,625 477,614 475,602 475,591 469,587 459,586 452,586 444,583 434,583 425,583 417,579 412,569 411,559 410,548 407,539 407,528 409,518 409,507 403,500 399,495 396,488 398,478 398,467 396,459 396,445 394,433 387,431 378,426 369,427 361,423 356,421 346,421 338,415 332,411 330,405 326,400 324,393 320,385 316,380 312,374 316,365 314,358 307,351 297,347 289,338 285,329 277,322"
              className={getRegionColor('warnet')}
              strokeWidth="1.5"
            />
            <circle cx="430" cy="450" r="5" fill="white" stroke="black" strokeWidth="1.5" />
            <text
              x="430"
              y="430"
              textAnchor="middle"
              className="text-[8px] md:text-[10px] font-medium fill-gray-800 pointer-events-none"
            >
              ဝါးနက်ချောင်း
            </text>
            <text
              x="430"
              y="445"
              textAnchor="middle"
              className="text-[7px] md:text-[9px] fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* ဆပ်သွားတော RHC - Northeast */}
          <g onClick={() => onRegionClick('satthwar')} className="cursor-pointer">
            <polygon
              points="516,635 515,626 515,615 515,607 516,599 519,589 522,582 525,575 530,571 533,559 542,552 549,552 551,544 555,535 560,528 562,519 565,512 565,503 567,496 575,499 582,499 585,504 588,509 594,514 603,521 610,523 611,530 617,537 619,543 622,548 626,554 627,559 634,563 643,563 649,574 654,579 662,582 668,585 674,589 691,591 700,591 708,591 716,591 723,591 727,607 732,613 736,621 744,627 751,633 754,638 757,643 758,650 758,659 758,668 761,673 763,680 763,688 767,696 771,702 778,706 780,716 776,726 774,731 769,736 761,739 751,741 740,746 733,743 721,747 711,751 702,751 700,757 694,765 683,765 675,769 665,771 662,775 652,777 645,772 637,763 631,755 625,750 620,743 611,741 604,738 598,726 587,718 579,707 585,707 594,707 592,699 588,693 581,684 574,678 565,670 557,663 548,657 540,653 534,648 524,641"
              className={getRegionColor('satthwar')}
              strokeWidth="1.5"
            />
            <circle cx="650" cy="670" r="5" fill="white" stroke="black" strokeWidth="1.5" />
            <text
              x="650"
              y="650"
              textAnchor="middle"
              className="text-[8px] md:text-[10px] font-medium fill-gray-800 pointer-events-none"
            >
              ဆပ်သွားတော
            </text>
            <text
              x="650"
              y="665"
              textAnchor="middle"
              className="text-[7px] md:text-[9px] fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* ရေကျော် RHC */}
          <g onClick={() => onRegionClick('yaykyaw')} className="cursor-pointer">
            <polygon
              points="437,698 439,691 444,694 452,689 460,686 468,686 477,685 482,689 490,689 493,682 491,673 488,663 481,655 481,646 484,636 490,634 501,634 508,634 515,635 524,639 532,645 539,652 545,656 551,659 555,662 562,667 568,670 574,677 581,686 592,697 591,707 579,702 583,704 581,716 586,723 593,726 605,734 610,741 617,742 623,744 626,749 629,754 634,763 640,764 644,774 649,778 657,780 660,787 652,793 640,794 631,797 624,799 617,801 613,804 606,811 605,818 606,825 601,827 594,831 589,834 586,841 586,848 583,854 583,863 581,870 573,873 562,879 554,874 549,868 541,864 530,862 521,857 514,860 509,862 503,862 497,868 487,874 475,873 464,877 455,879 448,866 441,858 435,851 429,846 426,835 426,827 426,820 433,810 429,799 421,795 413,795 404,795 396,797 393,788 393,778 392,770 392,763 399,755 409,745 411,737 417,730 424,730 433,730 433,723 429,716 423,711 424,704 431,703"
              className={getRegionColor('yaykyaw')}
              strokeWidth="1.5"
            />
            <circle cx="500" cy="790" r="5" fill="white" stroke="black" strokeWidth="1.5" />
            <text
              x="500"
              y="770"
              textAnchor="middle"
              className="text-[8px] md:text-[10px] font-medium fill-gray-800 pointer-events-none"
            >
              ရေကျော်
            </text>
            <text
              x="500"
              y="785"
              textAnchor="middle"
              className="text-[7px] md:text-[9px] fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* ရွှေလှေကြီး RHC - Eastern */}
          <g onClick={() => onRegionClick('shwethal')} className="cursor-pointer">
            <polygon
              points="296,687 302,682 312,677 321,668 329,662 333,655 338,650 344,643 349,638 358,639 365,641 371,641 384,640 386,645 385,652 389,656 394,662 400,667 407,671 412,677 415,684 422,687 431,691 436,694 435,700 427,700 422,706 422,714 427,718 431,723 428,729 419,727 413,732 411,738 407,742 403,747 399,753 391,757 390,765 390,770 394,778 394,785 394,792 395,798 403,798 409,797 417,796 425,801 432,806 428,812 424,818 426,827 427,837 431,846 436,851 439,860 446,864 448,873 455,875 462,878 470,874 478,875 487,874 491,880 484,886 477,893 469,894 465,902 455,903 447,910 447,918 447,923 439,929 431,922 422,915 415,907 411,902 405,896 398,889 390,886 389,876 389,866 395,860 397,852 399,844 399,833 394,824 383,814 376,810 367,808 357,805 347,800 339,800 332,802 323,802 315,799 307,802 302,806 294,808 288,811 282,813 271,813 264,810 252,807 245,806 239,802 235,796 241,787 242,775 241,767 235,762 229,755 223,752 217,746 211,744 209,738 204,733 200,723 197,715 194,707 195,698 195,691 203,688 214,686 224,682 234,680 234,670 230,660 222,650 214,646 205,643 198,643 191,644 195,635 203,632 203,624 199,616 192,609 186,603 191,598 200,596 208,596 218,600 227,605 236,604 244,602 250,593 251,583 255,575 261,570 265,558 272,556 276,562 279,568 281,575 285,582 284,590 282,597 278,604 271,611 266,614 266,621 259,625 253,628 245,628 235,628 232,634 231,640 227,645 231,653 235,656 240,665 242,671 245,676 250,675 259,675 264,678 274,682 279,686 288,687"
              className={getRegionColor('shwethal')}
              strokeWidth="1.5"
            />
            <circle cx="340" cy="790" r="5" fill="white" stroke="black" strokeWidth="1.5" />
            <text
              x="340"
              y="770"
              textAnchor="middle"
              className="text-[8px] md:text-[10px] font-medium fill-gray-800 pointer-events-none"
            >
              ရွှေလှေကြီး
            </text>
            <text
              x="340"
              y="785"
              textAnchor="middle"
              className="text-[7px] md:text-[9px] fill-gray-600 pointer-events-none"
            >
              RHC
            </text>
          </g>

          {/* MCH - Maternal and Child Health */}
          <g onClick={() => onRegionClick('mch')} className="cursor-pointer">
            <polygon
              points="445,690 438,694 429,690 422,685 414,678 407,673 401,669 395,662 390,656 386,650 382,642 381,633 393,630 402,622 408,618 417,617 425,617 434,615 444,610 453,609 465,607 473,602 477,610 477,618 477,623 477,630 482,636 482,642 481,648 480,654 482,660 487,662 492,669 492,679 491,685 480,686 469,686 461,686 450,688"
              className={getRegionColor('mch')}
              strokeWidth="1.5"
            />
            <circle cx="440" cy="660" r="6" fill="white" stroke="black" strokeWidth="1.5" />
            <text
              x="440"
              y="635"
              textAnchor="middle"
              className="text-[9px] md:text-xs font-bold fill-gray-800 pointer-events-none"
            >
              MCH
            </text>
            <text
              x="440"
              y="650"
              textAnchor="middle"
              className="text-[6px] md:text-[8px] fill-gray-600 pointer-events-none md:block hidden"
            >
              Maternal and Child Health
            </text>
          </g>
        </svg>
      </div>
      
      {/* Compact Facility Information - Optimized for both mobile and desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${selectedRegion === 'mch' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded flex-shrink-0`}></div>
          <span className="text-xs truncate">MCH</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${selectedRegion === 'yaeman' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded flex-shrink-0`}></div>
          <span className="text-xs truncate">မြောင်းတကာ RHC</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${selectedRegion === 'satthwar' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded flex-shrink-0`}></div>
          <span className="text-xs truncate">ဆပ်သွားတော RHC</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${selectedRegion === 'yaykyaw' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded flex-shrink-0`}></div>
          <span className="text-xs truncate">ရေကျော် RHC</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${selectedRegion === 'shwethal' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded flex-shrink-0`}></div>
          <span className="text-xs truncate">ရွှေလှေကြီး RHC</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${selectedRegion === 'warnet' ? 'bg-blue-600' : 'bg-blue-200'} border border-blue-800 rounded flex-shrink-0`}></div>
          <span className="text-xs truncate">ဝါးနက်ချောင်း RHC</span>
        </div>
      </div>

      {/* Selected region indicator for mobile */}
      {selectedRegion && (
        <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-lg md:hidden">
          <p className="text-xs text-blue-800">
            <span className="font-medium">Selected: </span>
            {selectedRegion === 'mch' && 'MCH'}
            {selectedRegion === 'yaeman' && 'မြောင်းတကာ RHC'}
            {selectedRegion === 'satthwar' && 'ဆပ်သွားတော RHC'}
            {selectedRegion === 'yaykyaw' && 'ရေကျော် RHC'}
            {selectedRegion === 'shwethal' && 'ရွှေလှေကြီး RHC'}
            {selectedRegion === 'warnet' && 'ဝါးနက်ချောင်း RHC'}
          </p>
        </div>
      )}

      <p className="text-xs text-gray-500 text-center mt-3">
        Click any health facility to view indicators • Hmawbi Township, Yangon Region
      </p>
    </div>
  );
};

export default RegionMap;