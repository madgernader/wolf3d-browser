/*
* ===========================================================================
*
* Wolf3D Browser Version GPL Source Code
* Copyright (C) 2012 id Software LLC, a ZeniMax Media company.
*
* This file is part of the Wolf3D Browser Version GPL Source Code ("Wolf3D Browser Source Code").
*
* Wolf3D Browser Source Code is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 2 of the License, or
* (at your option) any later version.
*
* Wolf3D Browser Source Code is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License version 2
* along with Wolf3D Browser Source Code.  If not, see <http://www.gnu.org/licenses/>.
*
* If you have questions concerning this license, you may contact in writing id Software LLC, c/o ZeniMax Media Inc., Suite 120, Rockville, Maryland 20850 USA.
*
* ===========================================================================
*/

/**
 * @description Encoded map file data (Example)
 *
 * This file is a table of base64 encoded map data.
 * Note: No actual data is included in this release.
 */

Wolf.MapData = {

  //.maps from idsoftware wolf3d-ios
	"maps/w00.map" : "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",

  //MAPHEAD.WL6
  "maps/w01.map" : "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"
};
