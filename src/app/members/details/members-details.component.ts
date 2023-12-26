import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../../_services/member.service';
import { Member } from '../../interfaces/member.interface';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { Photo } from '../../interfaces/photo.interface';

@Component({
  selector: 'app-members-details',
  standalone: true,
  imports: [TabsModule, GalleryModule],
  templateUrl: './members-details.component.html',
  styleUrl: './members-details.component.scss',
})
export class MembersDetailsComponent implements OnInit {
  member: Member | undefined;
  memberServer = inject(MemberService);
  route = inject(ActivatedRoute);
  images: GalleryItem[] = [];

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) throw new Error('no username param included');
    this.memberServer.getMember(username).subscribe({
      next: (member) => {
        this.member = member;
        if (member?.photos) {
          this.getImages(member.photos);
        }
      },
      error: (error) => console.log(error),
    });
  }

  getImages(photos: Photo[]) {
    for (const photo of photos) {
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url }));
    }
  }
}
