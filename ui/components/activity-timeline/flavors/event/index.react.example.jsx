/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';
import { TimelineIcon, TimelineActions } from 'ui/components/activity-timeline/flavors/base/index.react.example';

export let states = [
  {
    id: 'timeline-event',
    label: 'Default',
    element:
    <div className="demo-only">
      <span className="slds-assistive-text">Event</span>
      <MediaObject figureRight={ <TimelineActions title="More Options for Event, Company One" assistiveText="More Options for Event, Company One" /> }>
        <MediaObject className="slds-media--timeline slds-timeline__media--event" figureLeft={ <TimelineIcon symbol="event" /> } figureLeftClassName="slds-timeline__icon">
          <h3 className="slds-truncate" title="Company One — EBC Meeting">
            <a href="javascript:void(0);">Company One — EBC Meeting</a>
          </h3>
          <p className="slds-truncate" title="Let&rsquo;s get together to review the theater&rsquo;s layout and facilities. We&rsquo;ll also discuss potential things that truncate at a certain width.">Let&rsquo;s get together to review the theater&rsquo;s layout and facilities. We&rsquo;ll also discuss potential things that truncate at a certain width.</p>
          <ul className="slds-list--horizontal slds-wrap">
            <li className="slds-m-right--large">
              <span className="slds-text-title">Time:</span>
              <span className="slds-text-body--small"><a href="javascript:void(0);">Feb 23, 2015 11:00am&ndash;12:00pm</a></span>
            </li>
            <li className="slds-m-right--large">
              <span className="slds-text-title">Location:</span>
              <span className="slds-text-body--small"><a href="javascript:void(0);">300 Pike St, San Francisco CA</a></span>
            </li>
            <li className="slds-m-right--large">
              <span className="slds-text-title">Name:</span>
              <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a>, <a href="javascript:void(0);">Jason Dewar</a>, <a href="javascript:void(0);">Gwen Jones</a> and <a href="javascript:void(0);">Pete Schaffer</a></span>
            </li>
          </ul>
        </MediaObject>
      </MediaObject>
    </div>
  }
];
