---
layout: blog-default
permalink: /source
title:  "Daftar "
author: saidqb
toc: true
source_links:
- title: Development Tools
  link: development
  description: 
- title: Theme (Free)
  link: themes
  description: 
- title: Assets (Icon,Image)
  link: assets
  description: 
- title: Snippets (Html/Css)
  link: snippets
  description: 
- title: Seo
  link: seo
  description: 
---

<section class="source-main projects no-padding-top">
	<div class="container">
		<!-- Project-->
		{% for source in page.source_links %}

		<div class="project">
			<a href="{{ site.baseurl }}/source/{{source.link}}">
				<div class="row bg-white has-shadow">
					<div class="left-col col-lg-6 d-flex align-items-center justify-content-between">
						<div class="project-title d-flex align-items-center">
							<div class="image has-shadow"><img src="https://ui-avatars.com/api/?name={{source.title}}&bold=true&length=1" alt="..." class="img-fluid"></div>
							<div class="text">
								<h3 class="h4">{{source.title}}</h3>
							</div>
						</div>
					</div>
					<div class=" d-none right-col col-lg-6 d-flex align-items-center justify-content-between">
						<div class="project-progress ">
							<div class="progress">
								<div role="progressbar" style="width: 45%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-red"></div>
							</div>
						</div>
							<div>
						<svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg>
					</div>
					</div>
				
				</div>
			</a>
		</div>
		{% endfor %}

	</div>
</section>