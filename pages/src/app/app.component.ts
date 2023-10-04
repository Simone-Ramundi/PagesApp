import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'At the Luna park',
      url: 'https://images.unsplash.com/photo-1495013939822-0b3c84065ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHVuYSUyMHBhcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'At the Party',
      url: 'https://media.istockphoto.com/id/1417049186/it/foto/festa-di-compleanno-perfetta.jpg?s=612x612&w=is&k=20&c=zPjpt6ZBbDAsjv5cDctWUAgAEEcMIETxZdMHsaiRC38=',
    }
  ]
}
