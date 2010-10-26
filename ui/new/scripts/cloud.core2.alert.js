 /**
 *  Copyright (C) 2010 Cloud.com, Inc.  All rights reserved.
 * 
 * This software is licensed under the GNU General Public License v3 or later.
 * 
 * It is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */

function afterLoadAlertJSP() {

}

function alertToMidmenu(jsonObj, $midmenuItem1) {      
    $midmenuItem1.attr("id", getMidmenuId(jsonObj));  
    $midmenuItem1.data("jsonObj", jsonObj); 
        
    var $iconContainer = $midmenuItem1.find("#icon_container").show();   
    $iconContainer.find("#icon").attr("src", "images/midmenuicon_alerts.png");	
    
    $midmenuItem1.find("#first_row").text(jsonObj.description.substring(0,25)); 
    $midmenuItem1.find("#second_row").text(jsonObj.type.substring(0,25)); 
}

function alertToRightPanel($midmenuItem1) {   
    copyAfterActionInfoToRightPanel($midmenuItem1);
    alertJsonToDetailsTab($midmenuItem1);   
}

function alertJsonToDetailsTab($midmenuItem1) {   
    var jsonObj = $midmenuItem1.data("jsonObj");
    var $detailsTab = $("#right_panel_content #tab_content_details");   
    $detailsTab.data("jsonObj", jsonObj);  
        
    $detailsTab.find("#type").text(jsonObj.type);
    $detailsTab.find("#description").text(jsonObj.description);    
    setDateField(jsonObj.sent, $detailsTab.find("#sent"));	
}