# 게시판 페이지네이션 구현

### PageController

```java
package org.megabrain.kimchijjige.controller;

import org.megabrain.kimchijjige.entity.Bord;
import org.megabrain.kimchijjige.repository.BordRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class PageController {
    private BordRepository bordRepository;
    @Autowired
    private PageService pageService;
    public PageController(BordRepository repository){
        this.bordRepository = repository;
    }

    @GetMapping("/list")
    public Page<Bord> getAllBord(@RequestParam("page") Integer page, @RequestParam("size") Integer size, @RequestParam("sortBy") String sortBY, @RequestParam("isAsc") Boolean isAsc) {

        return pageService.getAllBord(page, size, sortBY ,isAsc);
    }

}
```

### PageService

```java
package org.megabrain.kimchijjige.service;

import org.megabrain.kimchijjige.entity.Bord;
import org.megabrain.kimchijjige.repository.BordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class PageService {

    @Autowired
    BordRepository bordRepository;

    public Page<Bord> getAllBord(int page, int size, String sortBy, boolean isAsc) {
        Sort.Direction direction = isAsc ? Sort.Direction.ASC : Sort.Direction.DESC;
        Sort sort = Sort.by(direction, sortBy);

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<Bord> bords = bordRepository.findAll(pageable);
        return bords;
    }
}
```

### PageServiceTest

```java
package org.megabrain.kimchijjige.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.megabrain.kimchijjige.entity.Bord;
import org.megabrain.kimchijjige.repository.BordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PageServiceTest {
    @Autowired
    private PageService pageService;

    @Autowired
    private BordRepository repository;

    @BeforeEach
    public void setUp(){
        for(int i = 0 ; i < 100; i++){
            Bord bord = Bord.builder()
                    .author("User" + i)
                    .content("Body")
                    .createdTime(LocalDateTime.now())
                    .modifiedTime(LocalDateTime.now())
                    .title("title")
                    .build();
            repository.save(bord);
        }
    }

    @Test
    void 페이지네이션테스트(){

        Page<Bord> page = pageService.getAllBord(0, 10, "createdTime", false);
        assertEquals(page.getTotalPages(), 10);

    }

}
```

### API

# Request

```json

```

# Response

```json
{
    "content": [
        {
            "id": 1,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:21.547938",
            "modifiedTime": "2022-03-28T12:27:21.547952",
            "author": "작성자"
        },
        {
            "id": 2,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:21.892882",
            "modifiedTime": "2022-03-28T12:27:21.892906",
            "author": "작성자"
        },
        {
            "id": 3,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:22.444235",
            "modifiedTime": "2022-03-28T12:27:22.444254",
            "author": "작성자"
        },
        {
            "id": 4,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:22.878553",
            "modifiedTime": "2022-03-28T12:27:22.878573",
            "author": "작성자"
        },
        {
            "id": 5,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:23.241481",
            "modifiedTime": "2022-03-28T12:27:23.241501",
            "author": "작성자"
        },
        {
            "id": 6,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:24.66004",
            "modifiedTime": "2022-03-28T12:27:24.660066",
            "author": "작성자"
        },
        {
            "id": 7,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:25.085022",
            "modifiedTime": "2022-03-28T12:27:25.085045",
            "author": "작성자"
        },
        {
            "id": 8,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:25.460562",
            "modifiedTime": "2022-03-28T12:27:25.460584",
            "author": "작성자"
        },
        {
            "id": 9,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:25.818804",
            "modifiedTime": "2022-03-28T12:27:25.818823",
            "author": "작성자"
        },
        {
            "id": 10,
            "title": "제목",
            "content": "내용",
            "createdTime": "2022-03-28T12:27:26.175051",
            "modifiedTime": "2022-03-28T12:27:26.175073",
            "author": "작성자"
        }
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 10,
        "paged": true,
        "unpaged": false
    },
    "last": false,
    "totalPages": 3,
    "totalElements": 21,
    "size": 10,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "number": 0,
    "first": true,
    "numberOfElements": 10,
    "empty": false
}
```