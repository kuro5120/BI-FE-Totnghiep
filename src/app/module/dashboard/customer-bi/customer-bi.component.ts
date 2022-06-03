import { Component, OnInit } from '@angular/core';
import * as models from 'powerbi-models';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-customer-bi',
  templateUrl: './customer-bi.component.html',
  styleUrls: ['./customer-bi.component.css']
})
export class CustomerBIComponent implements OnInit {

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  embedConfig = {
    type: "report",
    pageName: 'ReportSection9018f9381a0a0efc8af2',
    id: "e12e9e57-978c-4439-a04c-64c30d4ac700",
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=e12e9e57-978c-4439-a04c-64c30d4ac700&groupId=45d27fb3-c1ed-4776-8860-b0d96aaf223b&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLVdFU1QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiYW5ndWxhck9ubHlSZXBvcnRFbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwWm9uZVBhdGNoIjp0cnVlfX0%3d",
    accessToken: this.tokenService.accesstoken,
    tokenType: models.TokenType.Aad,
    settings: {

      panes: {
        filters: {
          expanded: false,
          visible: false
        },
        pageNavigation: {
          visible: false
        },
      },
      //background: models.BackgroundType.Transparent,
    }
  }
  eventHandlers = new Map([
    ['loaded', () => console.log('Report loaded')],
    ['rendered', () => console.log('Report rendered')],
    ['error', (event: any) => console.log(event.detail)]
  ]);

}
