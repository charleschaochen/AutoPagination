/**
 * Load pagination style
 * @param page_div	The div for pagination
 * @param pageNum	The total page count
 * @param pageNo	The current page number
 * @param maxShow	The max page count showed
 * @param link		The page link
 */
function load_pagination(page_div, pageNum, pageNo, maxShow, link) {
	if (page_div == "") {
		return false;
	}
	if (isNaN(pageNum) || isNaN(pageNo) || isNaN(maxShow)) {
		return false;
	}
	pageNum = parseInt(pageNum);
	pageNo = parseInt(pageNo);
	maxShow = parseInt(maxShow);
	var html = "<div class='auto-pagination'><ul>";
	var last = 1;
	// Add "Prev" button
	if (pageNo > 1) {
		html += "<li><a href='" + link + "'>Prev</a></li>";
	}
	if (pageNo <= maxShow) {
		for (var i = 1; i <= maxShow && i <= pageNum; i++) {
			if (i == pageNo) {
			// Disable current page
				html += "<li class='disabled'><a>" + i + "</a></li>";
			} else {
				html += "<li><a href='" + link + "'>" + i + "</a></li>";
			}
		}
		last = i - 1;
	} else {
		last = pageNo;
		html += "<li><a href='" + link + "'>1</a></li><li><a href='" + link + "'>2</a></li><li class='disabled'><a>......</a></li><li><a href='" + link + "'>" + (pageNo - 1) + "</a></li><li class='disabled'><a>" + pageNo + "</a></li>";
	}
	if (pageNum - last <= maxShow) {
		for (var i = last + 1; i <= pageNum; i++) {
			html += "<li><a href='" + link + "'>" + i + "</a></li>";
		}
	} else {
		html += "<li><a href='" + link + "'>" + (last + 1) + "</a></li><li class='disabled'><a>......</a></li><li><a href='" + link + "'>" + (pageNum - 1) + "</a></li><li><a href='" + link + "'>" + pageNum + "</a></li>";
	}
	// Add "Next" button
	if (pageNo < pageNum) {
		html += "<li><a href='" + link + "'>Next</a></li>";
	}
	html += "</ul></div>";
	$("." + page_div).html(html);
}

/**
 * Load pagination style, page url is with page number as tail
 * @param page_div	The div for pagination
 * @param pageNum	The total page count
 * @param pageNo	The current page number
 * @param maxShow	The max page count showed
 * @param link		The page link
 */
function load_pagination_pageno_tail(page_div, pageNum, pageNo, maxShow, link) {
	if (page_div == "") {
		return false;
	}
	if (isNaN(pageNum) || isNaN(pageNo) || isNaN(maxShow)) {
		return false;
	}
	pageNum = parseInt(pageNum);
	pageNo = parseInt(pageNo);
	maxShow = parseInt(maxShow);
	var html = "<div class='auto-pagination'><ul>";
	var last = 1;
	// Add "Prev" button
	if (pageNo > 1) {
		html += "<li><a href='" + link + (pageNo - 1) + "'>Prev</a></li>";
	}
	if (pageNo <= maxShow) {
		for (var i = 1; i <= maxShow && i <= pageNum; i++) {
			if (i == pageNo) {
			// Disable current page
				html += "<li class='disabled'><a>" + i + "</a></li>";
			} else {
				html += "<li><a href='" + link + i + "'>" + i + "</a></li>";
			}
		}
		last = i - 1;
	} else {
		last = pageNo;
		html += "<li><a href='" + link + 1 + "'>1</a></li><li><a href='" + link + 2 + "'>2</a></li><li class='disabled'><a>......</a></li><li><a href='" + link + (pageNo - 1) + "'>" + (pageNo - 1) + "</a></li><li class='disabled'><a>" + pageNo + "</a></li>";
	}
	if (pageNum - last <= maxShow) {
		for (var i = last + 1; i <= pageNum; i++) {
			html += "<li><a href='" + link + i + "'>" + i + "</a></li>";
		}
	} else {
		html += "<li><a href='" + link + (last + 1) + "'>" + (last + 1) + "</a></li><li class='disabled'><a>......</a></li><li><a href='" + link + (pageNum - 1) + "'>" + (pageNum - 1) + "</a></li><li><a href='" + link + pageNum + "'>" + pageNum + "</a></li>";
	}
	// Add "Next" button
	if (pageNo < pageNum) {
		html += "<li><a href='" + link + (pageNo + 1) + "'>Next</a></li>";
	}
	html += "</ul></div>";
	$("." + page_div).html(html);
}